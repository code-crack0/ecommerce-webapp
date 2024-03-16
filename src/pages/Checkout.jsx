import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Header from '../components/Header'
import { useSelector } from 'react-redux'

const CheckoutPage = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  // const [items, setItems] = useState(null)
  const items = useSelector((state) => state.cart)

  function truncString(s, charCount) {
    if (s.length < charCount) return s
    const tmp = s.substring(0, charCount)
    const res = tmp.substring(0, tmp.lastIndexOf(' ')) + '...'
    return res
  }
  const fetchData = async () => {
    setLoading(true)

    // const response = await axios.get('https://fakestoreapi.com/products/')
    // setItems(response.data)
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
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
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
            <div className='checkoutinfo'>
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
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CheckoutPage
