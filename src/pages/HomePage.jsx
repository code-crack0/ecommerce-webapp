import React, { useEffect, useState } from 'react'
import { useUser, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const HomePage = () => {
  const { isLoaded, user } = useUser()
  const [data, setData] = useState([])
  const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setData(response.data)
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
      {isLoaded && user ? (
        <div>
          <h1>Welcome USER!</h1>
          <h1>Welcome {user.fullName + ' ' + user.primaryEmailAddress}</h1>
          <UserButton afterSignOutUrl='/sign-in' />
        </div>
      ) : (
        <div>
          You are not Signed In.
          <Link to='/sign-in'>Sign In</Link>
        </div>
      )}
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
    </>
  )
}

export default HomePage
