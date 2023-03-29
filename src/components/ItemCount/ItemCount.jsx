import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1);
    
    const sumar = ()=>{
        if(count<stock){
        setCount(count + 1);
        } else {
            isDisabled(true);
        }
    }

    const restar = ()=>{
        if(count>0){
        setCount(count - 1);
        }
    }

    return (
    <div>
        <div>
            <button disabled={(count===0)} onClick={(restar)} type="button" className="btn btnCard">-</button>
            {count}
            <button disabled={(count===stock)} onClick={(sumar)} type="button" className="btn btnCard">+</button>
        </div>
        <button onClick={() => onAdd(count)} type="button" className="btn btnCard btnAgregarAlCarrito">Agregar al Carrito</button>
    </div>

  )
}

export default ItemCount