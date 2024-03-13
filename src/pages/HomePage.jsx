import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Header from '../components/Header'
const HomePage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
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
                    <h1>{item.title}</h1>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    height={100}
                    width={100}
                  />

                  <p>
                    {item.description.length > 80
                      ? item.description.substring(0, 80) + '...'
                      : item.description}
                  </p>
                  <p>{item.price}</p>
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
