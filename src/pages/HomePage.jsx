import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Header from '../components/Header'
const HomePage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  function truncString(s, charCount) {
    if (s.length < charCount) return s
    const tmp = s.substring(0, charCount)
    const res = tmp.substring(0, tmp.lastIndexOf(' ')) + '...'
    return res
  }
  const fetchData = async () => {
    setLoading(true)
    const response = await axios.get('https://fakestoreapi.com/products')
    setData(response.data)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Header />
      {loading ? (
        <div className='loading'>
          <div class='lds-dual-ring'></div>
        </div>
      ) : (
        <div id='wrapper'>
          <div className='items'>
            {data.map((item) => {
              return (
                <div className='single_item' key={item.id}>
                  <div className='single_item_title'>
                    <h1>{truncString(item.title, 40)}</h1>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    height={100}
                    width={100}
                  />

                  <p>{truncString(item.description, 80)}</p>
                  <p id='price'>AED {item.price}</p>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default HomePage
