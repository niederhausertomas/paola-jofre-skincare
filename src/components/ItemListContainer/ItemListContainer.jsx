import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const {categoryName} = useParams();
  
  
  useEffect(()=>{
  if(categoryName){
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((res) =>{
      const productosFiltrados = res.filter((res)=>res.category===categoryName)
      setItems(productosFiltrados)
    })
    .catch((error)=>{
      console.log(error);
    })
  }else{
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((res) => setItems(res))
    .catch((error)=>{
      console.log(error);
    })
  }

  },[categoryName]);

  return (
    <div className='container'>
        <ItemList items={items}/>
    </div>
  );
};

export default ItemListContainer