import React from 'react'
import Navbar from './Navbar'
import '../cssfiles/pizzainfo.css'
import Pizzadata from './Pizzadata'
import Pizzaprops from './Pizzaprops'
import Footer from './Footer'
const Pizzainfo = () => {
  // add map and slice function It helps us get the information right from Data
  const pizza = Pizzadata.slice(2).map((pizza, key)=>{
 return <Pizzaprops  {...pizza}  />
 
  })


  return (
    <>
    <Navbar/>
    {pizza}
    <Footer/>
    </>
  )
}

export default Pizzainfo




//<Pizzaprops image={ pizza.image} info={pizza.info} ingredients= {pizza.ingredients} step1= {pizza.step1}/>






















































/*


import React from 'react'
import Navbar from './Navbar'
import '../cssfiles/pizzainfo.css'
const Pizzainfo = () => {
  return (
    <div className='pizzafull'>
        <Navbar/>
        <div className='pizzainfullinformation'>
          <section className='pizzaimginfo'>
            <img src='https://c.ndtvimg.com/2022-03/g7o39j38_pizza_625x300_30_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350' alt='error'/>
            <h1 style= {{textAlign:'center'}}>Pizza Margherita in 4 easy steps</h1>
            </section>
            <section className='Method'>
            <ul>
                <h2>Ingredients</h2>
                <li>300g strong bread flour</li>
                <li>1 tsp instant yeast (from a sachet or a tub)</li>
                <li>1 tsp salt</li>
                <li>100ml passata</li>
                <li>125g ball mozzarella, sliced</li>
                <li>1 tbsp olive oil, plus extra for drizzling</li>
            </ul>
            <div className='method'>
                <h2>Method</h2>
                <h4> Step 1</h4>
                <p>Make the base: Put the flour into a large bowl, then stir in the yeast and salt. Make a well, pour in 200ml warm water and the olive oil and bring together with a wooden spoon until you have a soft, fairly wet dough. Turn onto a lightly floured surface and knead for 5 mins until smooth. Cover with a tea towel and set aside. You can leave the dough to rise if you like, but it’s not essential for a thin crust.</p>
                <h4> step 2</h4>
                <p>STEP 2
Make the sauce: Mix the passata, basil and crushed garlic together, then season to taste. Leave to stand at room temperature while you get on with shaping the base.</p>
            </div>
            </section>
        </div>
    </div>
  )
}

export default Pizzainfo 
*/