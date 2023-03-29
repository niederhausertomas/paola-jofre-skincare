import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({id}) => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((res) => setItems(res))
        .catch((error)=>{
          console.log(error);
        })
      },[]);
      
    const productDetail = items.find((product)=>product.id===id);

    return (
        <div className='container d-flex justify-content-evenly flex-wrap'>
            <ItemDetail productDetail ={productDetail} />
        </div>
    )
}

export default ItemDetailContainer