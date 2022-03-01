import React from 'react'
import Product from './Product'

function Products() {

    return (
        <div className="container mx-auto max-w-screen-xl pb-24 ">
            <h1 className="text-lg font-bold my-8">Products </h1>
            <div className="grid grid-cols-5 my-8 gap-24">
              <Product/>
            </div>
        </div>

    )
}

export default Products
