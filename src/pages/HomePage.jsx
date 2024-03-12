import React, { useEffect, useState } from 'react'
import { useUser,UserButton} from '@clerk/clerk-react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const HomePage = () => {
    const {isLoaded, user} = useUser();
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const fetchData = async () => {
        setLoading(true)
        const response =  await axios.get("https://fakestoreapi.com/products")
        setData(response.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }
    ,[])
  return (
    <>
    {
            
            <header className='header'>
                <h3>Ecommerce Logo</h3>
                {
                    isLoaded && user ? <UserButton signInUrl='/sign-in' showName afterSignOutUrl='/sign-in'/> : <Link to='/sign-in'><button className='signin_button'>Sign In</button></Link>
                }
            </header>
            
        


    }
    {
        loading ? 
        <div className='loading'>
            <div class="lds-dual-ring"></div>
        </div>
        :
        <div className="items">
            {
                data.map((item) => {
                    return (
                        <div className="single_item" key={item.id}>
                            <div className='single_item_title'><h1>{item.title}</h1></div>
                            <img src={item.image} alt={item.title} height={100} width={100}/>
                            
                            <p>{item.description.length > 80 ? item.description.substring(0, 80) + '...' : item.description}</p>
                        <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </div>
    }
    </>
  )
}

export default HomePage