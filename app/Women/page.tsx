import React from 'react'
import Store from '../components/Store'
import products from '../products.json'
const page = () => {
  return (
    <div className='text-center'>
        <p className='text-3xl'>Women</p>
        <Store products={products} />
    </div>
  )
}

export default page