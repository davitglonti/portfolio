import React from 'react'
import Navbar from './Navbar';
import { Link }from "react-router-dom";
import Homeprops from './Homeprops';
import '../cssfiles/home.css'
import homedata from './homedata';
import Footer from './Footer';
import Slider from './Slider';
import SliderData from './SliderData';

function Home() {
  const pizzacontainer = homedata.map(pizza => {
    return <Homeprops pizzaname = {pizza.name} pizzainfo = {pizza.pizzainfo} img = {pizza.img} />
    
  })
  return (
    <div className='homehead'>
       <Navbar/>
      
        <Slider slides={SliderData}/>
        <div className='home'>
          <h1>6 Most Popular Types of Pizza Around the Country  </h1>
          <div className='pizzacontainer'>
         {pizzacontainer}
        
          </div>
           {/* add see more button */}
           <Link to='/menu'>
           <button className='pizzabtn'> See More</button>
           </Link>
        </div>
        <Footer/>
    </div>
   
    
  )
}

export default Home;