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

      <div className='itemcontainer'>
        <img src={item.image} alt={item.title} height={'100%'} width={'auto'} />
        <div className='iteminfo'>
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
            className='cartbutton'
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
