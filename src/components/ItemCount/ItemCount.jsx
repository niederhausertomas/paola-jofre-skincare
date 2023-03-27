import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    
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
            <button disabled={(count===0)} onClick={(restar)} type="button" className="btn btn-primary">-</button>
            {count}
            <button disabled={(count===stock)} onClick={(sumar)} type="button" className="btn btn-primary">+</button>
        </div>
        <button onClick={() => onAdd(count)} type="button" className="btn btn-primary">Agregar al Carrito</button>
    </div>

  )
}

export default ItemCount