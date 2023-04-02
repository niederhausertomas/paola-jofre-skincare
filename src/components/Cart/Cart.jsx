import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/Cartcontext';
import Item from '../Item/Item';

const Cart = () => {

  const {cart} = useContext(CartContext);
  const {deleteAll} = useContext(CartContext);

  return (
    <div className='container '>
      <h3 className='tituloCart'>
        Cart
      </h3>
      <button onClick={()=>deleteAll()} className="btn btnCard">Borrar Todos los productos</button>
      <div className='container d-flex justify-content-evenly flex-wrap'>
        {
          cart.map((producto)=>{
            return <Item key={producto.id} producto = {producto} />
          })
        }
      </div>
    </div>
  )
}

export default Cart