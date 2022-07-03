import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../cssfiles/about.css'
 const About = () => {
  return (
    <>
    <Navbar/>
        <div className='about'>
        <h1> about</h1>
        <div className='aboutinfo'>
        <img src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60'/>
        <p className='abouttext'>Modern pizza evolved from similar flatbread dishes in Naples, Italy, in the 18th or early 19th century. The word pizza was first documented in 997 AD in Gaeta and successively in different parts of Central and Southern Italy. Pizza was mainly eaten in Italy and by emigrants from there.</p>
        </div>
    </div>
      <Footer/>
    </>
  )
}
export default About