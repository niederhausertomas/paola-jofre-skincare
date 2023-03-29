import React from 'react';
import './Item.css'

const Item = ({producto}) => {

  

  return (
    <div className="card text-center ">
        <img src={producto.image} className="card-img-top" alt="imagen de una crema"/>
        <div className="card-body">
            <h5 className="card-title">{producto.title}</h5>
            <p className="card-text">{producto.description}</p>
            <h6> Precio $ {producto.price}.-</h6>
            <a className="btn btnCard">Ver</a>
        </div>
    </div>
  )
}

export default Item