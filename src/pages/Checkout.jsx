import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Header from '../components/Header'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice, { addToCart } from '../features/cart/cartSlice'
import { store } from '../store'

const CheckoutPage = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState(null)

  function handleAddToCart(item) {
    addToCart(item)
    console.log(store.getState())
  }

  function truncString(s, charCount) {
    if (s.length < charCount) return s
    const tmp = s.substring(0, charCount)
    const res = tmp.substring(0, tmp.lastIndexOf(' ')) + '...'
    return res
  }
  const fetchData = async () => {
    setLoading(true)
    const response = await axios.get('https://fakestoreapi.com/products/')
    setItems(response.data)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  if (items == null) return <p>Loading..</p>
  return (
    <>
      <Header />
      {items.map((item) => (
        <div
          style={{
            // backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            // height: '80vh',
            width: 'auto',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '50px',
            margin: '0 300px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              // height: '200px',
              // padding: '20px',
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              height={'150px'}
              width={'auto'}
            />
            <div
              style={{
                display: 'flex',
                // backgroundColor: 'red',
                height: '100%',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: '50px',
              }}
            >
              <p style={{ fontSize: '20px' }}>{item.title}</p>
              <p style={{ fontSize: '12px', fontWeight: 'lighter' }}>
                {truncString(item.description, 200)}
              </p>
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '16px',
                  margin: '0 0 0 auto',
                }}
              >
                AED {item.price}
              </p>
              {/* <button
                style={{
                  backgroundColor: 'white',
                  padding: '12px',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  margin: '50px 0 0 auto',
                  cursor: 'pointer',
                  onclick: (_) => {
                    handleAddToCart(item)
                  },
                }}
              >
                + Add to Cart
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CheckoutPage
