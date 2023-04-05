import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';



const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { idNumber } = useParams();
    
    
  useEffect(() => {
    const collectionProd = collection(db, 'productos');
    const ref = doc(collectionProd, idNumber);

    getDoc(ref)
        .then((res) => {
            setItem({
                id: res.id,
                ...res.data(),
            });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
  }, [idNumber]);

    return (
        <div className='container d-flex justify-content-evenly flex-wrap'>
          { loading ? <BounceLoader className='container' color="hsla(293, 80%, 79%, 1)" /> : <ItemDetail productDetail ={item} />}
        </div>
    )
}

export default ItemDetailContainer