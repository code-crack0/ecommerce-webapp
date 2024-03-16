import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../features/data/dataSlice'
import { useNavigate } from 'react-router-dom'

const HomePage = ({ loading }) => {
  const data = useSelector((state) => state.data.data)
  const searchResults = useSelector((state) => state.data.searchResults)
  const navigate = useNavigate()

  return (
    <>
      <Header />
      {loading ? (
        <div className='loading'>
          <div className='lds-dual-ring'></div>
        </div>
      ) : (
        <div className='items'>
          {searchResults.length === 0
            ? data?.map((item) => {
                return (
                  <div
                    className='single_item'
                    key={item.id}
                    onClick={(_) => navigate('/' + item.id)}
                  >
                    <div className='single_item_title'>
                      <h1>{item.title}</h1>
                    </div>
                    <img
                      src={item.image}
                      alt={item.title}
                      height={250}
                      width={250}
                    />

                    <p>
                      {item?.description?.length > 80
                        ? item?.description?.substring(0, 80) + '...'
                        : item?.description}
                    </p>
                    <b>{'AED ' + item.price}</b>
                  </div>
                )
              })
            : searchResults?.map((item) => {
                return (
                  <div className='single_item' key={item.id}>
                    <div className='single_item_title'>
                      <h1>{item.title}</h1>
                    </div>
                    <img
                      src={item.image}
                      alt={item.title}
                      height={250}
                      width={250}
                    />

                    <p>
                      {item?.description?.length > 80
                        ? item?.description?.substring(0, 80) + '...'
                        : item?.description}
                    </p>
                    <b>{'AED ' + item.price}</b>
                  </div>
                )
              })}
        </div>
      )}
    </>
  )
}

export default HomePage
