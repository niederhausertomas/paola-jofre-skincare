import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((res) => setItems(res))
    .catch((error)=>{
      console.log(error);
    })
  },[]);

  return (
    <div className='container'>
        <ItemList items={items}/>
    </div>
  );
};

export default ItemListContainer