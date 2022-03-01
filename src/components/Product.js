import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../pages/Cart';

function Product() {
  const [add, setadd] = useState(0)
  const [add1, setadd1] = useState(0)
  const addtocart = (event) =>{
    event.preventDefault();

  }

  function sum (){
    setadd(add + 1);   
  }
 
  function sum1 (){
    setadd1(add1 + 1);
  }

 
    return (
      <>
      <Link to = '/Singleproduct'>
        <div>
           <img src="/img/peproni.png" alt="pizza" />
           <div className="text-center">
              <h2 className='text-lg font-bold py-2'>Havana Special</h2>
              <span className="g-gray-200 py-1 rounded-full text-sm px-4">Small</span>
          </div>
    
          <div className='flex justify-between items-center mt-4'>
            <span>$100</span>
            <button onClick={(event) => {
              addtocart(event);
              sum() }} 
              className='bg-yellow-500 py-1 px-4 rounded-full font-bold' >ADD {add}</button>
        
          </div>
        </div>
    </Link>
      <Link to = '/Singleproduct2'>
        <div>
           <img src="/img/peproni.png" alt="pizza" />
           <div className="text-center">
              <h2 className='text-lg font-bold py-2'>Peproni Special</h2>
              <span className="g-gray-200 py-1 rounded-full text-sm px-4">Medium</span>
          </div>
    
          <div className='flex justify-between items-center mt-4'>
            <span>$100</span>
            <button onClick={(event) => {
              addtocart(event);
              sum1() }} 
              className='bg-yellow-500 py-1 px-4 rounded-full font-bold' >ADD {add1}</button>
        
          </div>
        </div>
    </Link>
  
    </>
     
      
    )
}

export default Product
