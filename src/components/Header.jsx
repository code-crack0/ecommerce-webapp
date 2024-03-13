import React from 'react'
import { useUser,UserButton} from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
const Header = () => {
    const {isLoaded, user} = useUser();
  return (
    
            
        <header className='header'>
            <a href='/' className='logo'><h3>Ecommerce Logo</h3></a>
            <div className='header__right'>
                <input type='text' className='search__input' placeholder='Search'/>
            {
                isLoaded && user ? <UserButton signInUrl='/sign-in' showName afterSignOutUrl='/sign-in'/> : <Link to='/sign-in'><button className='signin_button'>Sign In</button></Link>
            }
            </div>
        </header>
        
    
  )
}

export default Header