import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const {categoryName} = useParams();
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
  if(categoryName){
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((res) =>{
      const productosFiltrados = res.filter((res)=>res.category===categoryName)
      setItems(productosFiltrados)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error);
    })
  }else{
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((res) => setItems(res))
    .catch((error)=>console.log(error))
    .finally(()=> setLoading(false))
  }

  },[categoryName]);

  return (
    <div className='container'>
      { loading ? <BounceLoader className='container' color="hsla(293, 80%, 79%, 1)" /> : <ItemList items={items}/>
      }
    </div>
  );
};

export default ItemListContainer