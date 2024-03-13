import React, { useEffect, useState } from 'react'
import { useUser, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const HomePage = () => {
  const { isLoaded, user } = useUser()
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
  function truncString(s, charCount) {
    if (s.length < charCount) return s
    const tmp = s.substring(0, charCount)
    const res = tmp.substring(0, tmp.lastIndexOf(' ')) + '...'
    return res
  }
  return (
    <>
      {
        <header className='header'>
          <h3>Ecommerce Logo</h3>
          {isLoaded && user ? (
            <UserButton
              signInUrl='/sign-in'
              showName
              afterSignOutUrl='/sign-in'
            />
          ) : (
            <Link to='/sign-in'>
              <button className='signin_button'>Sign In</button>
            </Link>
          )}
        </header>
      }
      {loading ? (
        <div className='loading'>
          <div class='lds-dual-ring'></div>
        </div>
      ) : (
        <div id='wrapper'>
          <div className='items'>
            {data &&
              data.map((item) => {
                return (
                  <div key={item.id} className='single_item'>
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
