import React, { useState } from 'react'
import { useUser,UserButton} from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchData } from '../features/data/dataSlice';
const Header = () => {
    const dispatch = useDispatch();
    const {isLoaded, user} = useUser();
    const [search,setSearch] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchData(search))
        
    }
  return (
    
            
        <header className='header'>
            <a href='/' className='logo'><h3>Ecommerce Logo</h3></a>
            <div className='header__right'>
                <form onSubmit={handleSearch}>
                <input type='text' className='search__input' placeholder='Search' value={search} onChange={
                    (e) => setSearch(e.target.value)
                }/>
                </form>
            {
                isLoaded && user ? <UserButton signInUrl='/sign-in' showName afterSignOutUrl='/sign-in'/> : <Link to='/sign-in'><button className='signin_button'>Sign In</button></Link>
            }
            </div>
        </header>
        
    
  )
}

export default Header