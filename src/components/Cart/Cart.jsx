import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/Cartcontext';
import CartCard from '../CartCard/CartCard';

const Cart = () => {

  const {cart} = useContext(CartContext);
  const {deleteAll} = useContext(CartContext);
  const {totalCompra} = useContext(CartContext);
  if (cart.length === 0){
     return <div className='container text-center'>
              <br></br> <br></br>
              <h2> No hay items en el carrito!</h2>
              <br></br> <br></br>
            </div> 
    } else {
   return (<div className='container d-flex justify-content-around align-items-center flex-wrap'>
      <br/><br/><br/>
      <h3 className='tituloCart '>
        Detalle de la compra:
      </h3>
      <h3>
        Total a pagar: {totalCompra()}
      </h3>
      <button onClick={()=>deleteAll()} className="btn btnCard">Borrar Todos los productos</button>
      <div className='container d-flex justify-content-evenly flex-wrap'>
        {
          cart.map((producto)=>{
            return <CartCard key={producto.id} producto = {producto} />
          })
        }
      </div>
    </div>
  )}
}

export default Cart