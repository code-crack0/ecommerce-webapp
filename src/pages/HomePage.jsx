import React, { useEffect, useState } from 'react'
import { useUser,UserButton} from '@clerk/clerk-react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const HomePage = () => {
    const {isLoaded, user} = useUser();
    const [data,setData] = useState([]);
    const fetchData = async () => {
        const response =  await axios.get("https://fakestoreapi.com/products")
        setData(response.data)
    }
    useEffect(() => {
        fetchData()
    }
    ,[])
  return (
    <>
    {
        isLoaded && user ? (
            <div>
            <h1>Welcome {user.fullName +  ' ' + user.primaryEmailAddress}</h1>
            <UserButton afterSignOutUrl='/sign-in'/>
            </div>
        )
        :(
            <div>
                You are not Signed In.
                <Link to='/sign-in'>
                    Sign In
                </Link>
            </div>
        )


    }
    <div className='items'>
        {
            data && data.map((item) => {
                return (
                    <div key={item.id} className='single_item'>
                        <h1>{item.title}</h1>
                        <img src={item.image} alt={item.title} height={100} width={100} />
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default HomePage