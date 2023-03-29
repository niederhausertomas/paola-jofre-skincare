import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({productDetail}) => {
    const onAdd = (count)=>{if(count>0){console.log("Agregado al carrito!")}}

    if (!productDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container d-flex justify-content-evenly flex-wrap align-items-center' >
            <img src={productDetail.image} className="itemDetailContainerImg" alt="imagen de una crema"/>
            <div className="itemDetailContainerData text-center">
                <div className="card-body align-items-center">
                    <h5 className="card-title">{productDetail.title}</h5>
                    <p className="card-text">{productDetail.description}</p>
                    <h6 className="card-text">Precio $ {productDetail.price}.-</h6>
                    <ItemCount 
                    stock = {10} 
                    onAdd = {onAdd}
                    />
                </div>
            </div>
        </div>
)}

export default ItemDetail