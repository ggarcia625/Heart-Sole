"use client";
import { useEffect, useState } from 'react'
import products from '../products.json'
import Store from '../components/Store'

const page = () => {
    const [brands, setBrands] = useState();
    // const url = 'https://v1-sneakers.p.rapidapi.com/v1/brands';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': '9d6bd4c0c3mshe6b956e44db6f11p148cd2jsnefa1b9843f8e',
    //         'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
    //     }
    // };
    useEffect(() => {
       async function getShoes() {
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log('res', result);
            setBrands(result)
        } catch (error) {
            console.error(error);
        }
       }
    getShoes()
    }, [])
  return (
    <div className='text-center'>
        <p className='text-3xl'>MEN</p>
        <span>{brands}</span>
        <Store products={products}/>
    </div>
  )
}

export default page