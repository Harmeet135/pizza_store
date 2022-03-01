import React, { useState } from 'react'

function Cart() {
    const [add, setadd] = useState(0)
    const [add1, setadd1] = useState(0)
    function sum (){
        setadd(add + 1);     
      }
    function sub (){
        setadd(add - 1);     
      }
     
      function sum1 (){
        setadd1(add1 + 1);
      }
      function sub1 (){
        setadd1(add1 - 1);
      }

      const notification= ()=>{
        window.alert('the order is succesful')
       
    }


    return (
        <div className='mx-auto max-w-screen-xl my-9'>
            
            <ul>
                <li className="mb-12 mx-auto max-w-screen-xl" >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-16" src='/img/peproni.png' alt="" />
                            <span className="font-bold ml-4 w-48">Havana Special</span>
                        </div>
                        <div>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none hover:bg-yellow-600" onClick={() => {sub() }} >-</button>
                            <b className="px-4">{add}</b>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none hover:bg-yellow-600" onClick={() => {sum() }} >+</button>
                        </div>
                        <span>₹ {add*100}</span>
                        <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                    </div>
                </li>
                
                <li className="mb-12 mx-auto max-w-screen-xl" >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-16" src='/img/peproni.png' alt="" />
                            <span className="font-bold ml-4 w-48">peproni Special</span>
                        </div>
                        <div>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none hover:bg-yellow-600" onClick={() => {sub1() }}>-</button>
                            <b className="px-4">{add1}</b>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none hover:bg-yellow-600" onClick={() => {sum1() }} >+</button>
                        </div>
                        <span >{add1*200}</span>
                        <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                    </div>
                </li>
                <div className='text-right'>
                <b className='text-right'>Total Items :</b> <span>{add+add1}</span>
                </div>
            </ul>
            <hr className='my-6' />
            <div className='text-right'>
                <b>Grand Total :</b> <span>{add*100+add1*200}</span>
            </div>
            <div className='text-right my-3'>
                <button onClick={notification} className="bg-red-500 px-4 py-2 rounded-full leading-none text-white" >Order Now</button>
            </div>
        </div>
    )
}

export default Cart
