import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    let id = useParams();
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => setItems(res))
      .catch((error)=>{
        console.log(error);
      })
    },[]);
    id = parseInt(id.idNumber)
    const productDetail = items.find((product)=>product.id===id);

    return (
        <div className='container d-flex justify-content-evenly flex-wrap'>
            <ItemDetail productDetail ={productDetail} />
        </div>
    )
}

export default ItemDetailContainer