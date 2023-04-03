import React, { useContext } from 'react';
import './CartCard.css';
import { CartContext } from '../../context/Cartcontext';

const CartCard = ({producto}) => {
    const {deleteOne} = useContext(CartContext);
    const {restarUnoDeItem} = useContext(CartContext);
    const {sumarUnoDeItem} = useContext(CartContext);

  return (
    <div className="cardCart container" >
        <div className="d-flex justify-content-around align-items-center flex-wrap ">
            <div className="col-md-4">
                <img src={producto.image} className="img-fluid " alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body ">
                    <h5 className="card-title">{producto.title}</h5>
                    <br/>
                    <h6> Precio unitario: $ {producto.price}.-</h6>
                    <h6>Cantidad: {producto.cantidad}.-</h6>
                    <button onClick={()=>restarUnoDeItem(producto.id)} className='btn btnCard'> - </button>
                    <button onClick={()=>sumarUnoDeItem(producto.id)} className='btn btnCard'> + </button>
                    <button onClick={()=>deleteOne(producto.id)} className='btn btnCard'>Eliminar item</button>
                    <h6> total de este producto: {(producto.price * producto.cantidad)}.-</h6>
                </div>        
            </div>
        </div>
    </div>
)};
export default CartCard