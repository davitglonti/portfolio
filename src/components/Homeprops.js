import React from 'react'
import '../cssfiles/home.css'
const Homeprops = (props, id) => {
  return (
    <div className='pizzaheader' id={id}>
       <h2 className='pizzaname'>{props.pizzaname}</h2>
       <p className='pizzainfo'> {props.pizzainfo}</p>
       <img src={props.img} className='pizzaimage'/>
    </div>
  )
}

export default Homeprops;