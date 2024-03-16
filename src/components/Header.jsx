import React, { useState } from 'react'
import { useUser,UserButton} from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchData } from '../features/data/dataSlice';
const Header = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const {isLoaded, user} = useUser();
    const [search,setSearch] = useState('');
    const [cartOpen,setCartOpen] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchData(search))
        
    }
    const handleCart = () => {
        setCartOpen(!cartOpen)
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
            
                
                <img src='/cart.svg' alt='cart' height={30} width={30} className='cart__image' onClick={handleCart}/>
                {cartOpen && (
                    <div className='cart-box'>
                        {
                            cart.length === 0 ? <h3>Cart is empty</h3> : cart.map((item) => {
                                return (
                                    <div className='cart-item' key={item.id}>
                                        <h4>{item.title.substring(0,20)}</h4>
                                        <p>${item.price}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
                {isLoaded && user ? <UserButton signInUrl='/sign-in'  afterSignOutUrl='/sign-in'/> : <Link to='/sign-in'><button className='signin_button'>Sign In</button></Link>}
            </div>
        </header>
        
    
  )
}

export default Header