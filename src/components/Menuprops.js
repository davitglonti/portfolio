import React from 'react'

import '../cssfiles/menu.css'
const Menuprops = (props) => {
  return (
    <div className='menu' >
    <div className='menuitem'>
    <h1 className='menuh1'>{props.name}</h1>
      <img src={props.img} className='menuimg'></img>
      <p className='menuprice'>price: {props.price}$</p>
     
      </div>
     
      </div>
  )
}

export default Menuprops

