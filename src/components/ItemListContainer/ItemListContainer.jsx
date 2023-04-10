import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const {categoryName} = useParams();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const collectionProd = collection(db, 'productos');

    const ref = categoryName
        ? query(collectionProd, where('category', '==', categoryName))
        : collectionProd;

    getDocs(ref)
        .then((res) => {
            const products = res.docs.map((prod) => {
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setItems(products);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });

    return () => setLoading(true);
}, [categoryName]);

  return (
    <div className='container'>
      <br/><br/><br/><br/>
      { loading ? <BounceLoader className='container' color="hsla(293, 80%, 79%, 1)" /> : <ItemList items={items}/>
      }
    </div>
  );
};

export default ItemListContainer