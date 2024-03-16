import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Header from '../components/Header'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice, { addToCart } from '../features/cart/cartSlice'
import { store } from '../store'
import { useDispatch, useSelector } from 'react-redux'

const ItemPage = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState(null)
  const dispatch = useDispatch()

  function handleAddToCart(item) {
    // addToCart(item)
    console.log('Adding to cart')
    dispatch(addToCart(item))
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
    const response = await axios.get('https://fakestoreapi.com/products/' + id)
    setItem(response.data)
    setData(response.data)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  if (item == null) return <p>Loading..</p>
  return (
    <>
      <Header />

      <div
        style={{
          // backgroundColor: 'red',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          height: '80vh',
          width: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '50px',
          margin: '0 300px',
        }}
      >
        <img src={item.image} alt={item.title} height={'100%'} width={'auto'} />
        <div
          style={{
            display: 'flex',
            // backgroundColor: 'red',
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '50px',
          }}
        >
          <p style={{ fontSize: '36px' }}>{item.title}</p>
          <p style={{ fontSize: '22px', fontWeight: 'lighter' }}>
            {item.description}
          </p>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '22px',
              margin: '0 0 0 auto',
            }}
          >
            AED {item.price}
          </p>
          <button
            style={{
              backgroundColor: 'white',
              padding: '12px',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '16px',
              margin: '50px 0 0 auto',
              cursor: 'pointer',
            }}
            onClick={(_) => {
              handleAddToCart(item)
            }}
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default ItemPage
