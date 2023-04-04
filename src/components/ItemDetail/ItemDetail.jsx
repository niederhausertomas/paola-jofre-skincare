import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import {CartContext} from '../../context/Cartcontext';
import { Link } from 'react-router-dom';

const ItemDetail = ({productDetail}) => {
    const [cant, setCant] = useState(0);
    const {addToCart} = useContext(CartContext);
    
    const onAdd = (count)=>{
        if(count>0){
            setCant(count)
            addToCart(productDetail, count );
        }}
    
    

    if (!productDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <br/><br/>
            <div className='container d-flex justify-content-evenly flex-wrap align-items-center' >
                <img src={productDetail.image} className="itemDetailContainerImg" alt="imagen de una crema"/>
                <div className="itemDetailContainerData text-center">
                    <div className="card-body align-items-center">
                        <h5 className="card-title">{productDetail.title}</h5>
                        <p className="card-text">{productDetail.description}</p>
                        <h6 className="card-text">Precio $ {productDetail.price}.-</h6>
                        {
                            cant === 0 ? (
                                <ItemCount 
                                stock = {10} 
                                onAdd = {onAdd}
                                />
                            ) : 
                            <>
                                <br/>
                                <Link to={'/'} >
                                    <button className='btn btnCard'>Seguir comprando</button>
                                </Link>
                                <br/> <br/>
                                <Link to={'/cart'} >
                                    <button className='btn btnCard'>Ir al carrito</button>
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/>
        </div>
)}

export default ItemDetail