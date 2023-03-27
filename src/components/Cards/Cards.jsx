import React from 'react';
import './Cards.css'
import ItemCount from '../ItemCount/ItemCount';

const Cards = (prop) => {

  const onAdd = (count)=>{if(count>0){console.log("Agregado al carrito!")}}

  return (
    <div className="card text-center">
        <img src={prop.imagen} className="card-img-top" alt="imagen de una crema"/>
        <div className="card-body">
            <h5 className="card-title">{prop.titulo}</h5>
            <p className="card-text">{prop.descripcion}</p>
            <a className="btn btnCard">Ver</a>
            <ItemCount 
              stock = {10} 
              initial = {0} 
              onAdd = {onAdd}
            />
        </div>
    </div>
  )
}

export default Cards