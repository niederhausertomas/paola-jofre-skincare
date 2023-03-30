import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {

  

  return (
    <div className="card text-center ">
        <img src={producto.image} className="card-img-top" alt="imagen de una crema"/>
        <div className="card-body">
            <h5 className="card-title">{producto.title}</h5>
            <p className="card-text">{producto.description}</p>
            <h6> Precio $ {producto.price}.-</h6>
            <Link to={`/item/${producto.id}`} className="btn btnCard">Ver</Link>
        </div>
    </div>
  )
}

export default Item