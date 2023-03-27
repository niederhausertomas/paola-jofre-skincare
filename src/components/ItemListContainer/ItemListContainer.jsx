import React from 'react'
import { products } from '../../Mock/productos'

const ItemListContainer = (prop) => {

  const getProducts = () =>{
    new Promise ((res,rej) => {
    return products;
  });
};

  getProducts()
    .then((res)=>{
      console.log(res)
    })
    .catch((rej)=>{
      console.log(rej);
    })
  

  return (
    <h1>
        {prop.saludo}
    </h1>
  )
}

export default ItemListContainer