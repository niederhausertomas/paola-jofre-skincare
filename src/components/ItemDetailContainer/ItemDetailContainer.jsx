import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';


const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    let id = useParams();
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => setItems(res))
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[]);
    id = parseInt(id.idNumber)
    const productDetail = items.find((product)=>product.id===id);

    return (
        <div className='container d-flex justify-content-evenly flex-wrap'>
          { loading ? <BounceLoader className='container' color="hsla(293, 80%, 79%, 1)" /> : <ItemDetail productDetail ={productDetail} />}
        </div>
    )
}

export default ItemDetailContainer