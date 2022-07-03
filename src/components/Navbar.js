import React from 'react'
import { Link } from 'react-router-dom';

import { AiFillSignal } from 'react-icons/ai';
import '../cssfiles/navbar.css';
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='leftbar'>
         <Link to='/'  > <img src='https://cdn2.vectorstock.com/i/1000x1000/47/61/pizza-logo-vector-21904761.jpg' alt={'img'} className='navbar-img'/> </Link>
        </div>
        <div className='rightbar'>
          <nav className='nav'>
               <Link to="/" className='link'>Home</Link> 
                <Link to="/about" className='link'>about</Link> 
                <Link to="/page" className='link'>addpage</Link> 
                <Link to="/menu" className='link'>menu</Link> 
              
           </nav> 
        </div>
    </div>
  )
}
export default Navbar;

//https://cdn2.vectorstock.com/i/1000x1000/47/61/pizza-logo-vector-21904761.jpg
//https://images.pexels.com/photos/1034661/pexels-photo-1034661.jpeg?cs=srgb&dl=pexels-jiarong-deng-1034661.jpg&fm=jpg