import React from 'react';
import Item from '../Item/Item.jsx';


const ItemList = ({items}) => {


  return (
    <div className='container d-flex justify-content-evenly flex-wrap'>
    {
      items.map((producto)=>{
        return <Item key={producto.id} producto = {producto} />
      })
    }
  </div>
  )
}

export default ItemList