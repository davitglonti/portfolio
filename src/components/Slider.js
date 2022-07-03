import React, { useState } from 'react'
import SliderData from '../components/SliderData'
import '../cssfiles/home.css'
import {Link} from 'react-router-dom'
import { AiOutlineCaretLeft, AiFillCaretRight } from 'react-icons/ai';
const Slider = (props) => {
    const [current, setCurrent] = useState(0)
        const length= props.slides.length;
        //slide functions
    const next=() => {
        setCurrent( current === length -1 ? 0 : current + 1)     
    }
//timeout function
setTimeout(next, 5000);

    const prev=() => {
        setCurrent(current === 0 ? length-1 : current-1) 
       console.log(current)
    }

    return (
        <section className='slider'> 
        <AiOutlineCaretLeft className='slidericon iconleft' onClick={prev}/>
       <AiFillCaretRight className='slidericon iconright' onClick={next}/>
        {SliderData.map((slide,index)=>{
         return (
            <div className='imgheader' key={index}>
               {index=== current &&  <div><img src={slide.image} alt='error' className='sliderimage'/> 
                    <p className='sliderinfo'>{slide.info}</p>
                    <Link to='/menu'> <button type='text' className='sliderbtn'>more button</button>
                    </Link>
                                     </div>}
            </div>
         )
    
        })}</section>
    )
}

export default Slider



//<button onClick={next} className='slidericon iconright'> <AiFillCaretRight /> </button>