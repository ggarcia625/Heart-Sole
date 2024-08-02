import React from 'react'
import Image from 'next/image';

type product = {
    id: number;
    name: string;
    price: number;
    description: string;
  };

const ItemCard = ({ id, name, price, description }: product) => {
  return (
    <div key={id} className="border p-4 rounded shadow-md">
        {/* <Image src=''/> */}
        <span>{name}</span>
        <span>{price}</span>
        <span>{description}</span>
    </div>
  )
}

export default ItemCard