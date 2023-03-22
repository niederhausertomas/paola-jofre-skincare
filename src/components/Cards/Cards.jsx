import React from 'react';
import './Cards.css'

const Cards = (prop) => {
  return (
    <div className="card text-center">
        <img src={prop.imagen} className="card-img-top" alt="imagen de una crema"/>
        <div className="card-body">
            <h5 className="card-title">{prop.titulo}</h5>
            <p className="card-text">{prop.descripcion}</p>
            <a className="btn btnCard">Comprar</a>
        </div>
    </div>
  )
}

export default Cards