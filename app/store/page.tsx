import React from 'react'

const products = [
  {
    id: 1,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
  {
    id: 2,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
  {
    id: 3,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
  {
    id: 4,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
  {
    id: 4,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
  {
    id: 5,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
  {
    id: 6,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
  {
    id: 7,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
  {
    id: 8,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
  {
    id: 9,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
  {
    id: 10,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
  {
    id: 11,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
  {
    id: 12,
    name: 'Shoe',
    price: 40,
    description: 'running shoes for trails',
  },
]

const store = () => {

  return (
    <div className='w-full h-full flex justify-center'>
      <div className='grid grid-cols-4 grid-rows-max max-w-[1000px]'>
        {products.map((product) => 
        <div className='border-2 p-4 w-40 m-2'>
          <span>{product.name}</span>
          <span>{product.price}</span>
          <span>{product.description}</span>
        </div>
        )}

      </div>
      
    </div>
  )
}

export default store