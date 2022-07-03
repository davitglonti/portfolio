import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import '../cssfiles/menu.css'
import Menudata from './Menudata';
import Menuprops from './Menuprops';
const Menu = () => {
  const menu = Menudata.map((menu) => {
    return <Menuprops name = {menu.name} img = {menu.img} price = {menu.price}  key={menu.id}/>
    
  })
  return (
<>
<Navbar/>
<div className='menuhead'>
   {menu}
   </div>
      <Footer/>
    </>
  )
}

export default Menu;