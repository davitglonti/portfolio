import React from 'react'
import '../cssfiles/pizzainfo.css'
 const Pizzaprops = (props) => {
    return (
    <div className='pizzafull'>
    <div className='pizzainfullinformation'>
      <section className='pizzaimginfo'>
        <img src={props.image} alt='error' className='pizzaimg'/>
        <h1 style= {{textAlign:'center'}}>{props.info}</h1>
        </section>
        <section className='Method'>
        <ul className='ingredients'>
            <h2>Ingredients</h2>
            <li>{props.ingredients}</li>
            <li>{props.ingredients1}</li>
            <li>{props.ingredients2}</li> 
            <li>{props.ingredients3}</li> 
            <li>{props.ingredients4}</li> 
            <li>{props.ingredients5}</li> 
        </ul>
        <div className='method'>
            <h2>Method</h2>
            <h4> Step 1</h4>
            <p>{props.step1}</p>
            <div className='line'></div>
            <h4> step 2</h4>
            <p>{props.step2}</p>
            <div className='line2'></div>
            <h4> step 3</h4>
            <p>{props.step3}</p> 
            <div className='line'></div>
        </div>
        </section>
    </div>
</div>
)
}

export default Pizzaprops