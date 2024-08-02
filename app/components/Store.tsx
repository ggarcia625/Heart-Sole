"use client";
import React from "react";
import ItemCard from "./ItemCard";

type product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type StoreProps = {
  products: product[];
};

// store commponent takes in maybe products, gender, type props
// these props would pasted down by the parent component. I.e. mens, womens, clearance
const store = ({ products }: StoreProps) => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {products.map((product) => (
          <ItemCard {...product}/>
        ))}
      </div>
  );
};

export default store;
