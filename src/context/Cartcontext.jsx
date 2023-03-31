import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props)=>{
    const [cart, setCart] = useState([]);
    // suma productos al cart, si esta repetido tira alert(despues tengo que modificar eso)
    const addToCart = (item, cantidad) =>{
        if(isInCart(item.id)){
            console.log("ya esta en el array!!");
        }else{
            setCart([...cart, {...item, cantidad}]);
        }      
    }
    console.log(cart)
    //cantidad de productos en el carrito
    const cantProdEnCart = ()=>{
        let cantidad = 0;
        for(let i=0; i<cart.length; i++){
            cantidad += cart[i].cantidad;
        }
        return cantidad;
    }

    const isInCart = (id)=>{
        return cart.some((prod)=>prod.id === id);
    }

    return <CartContext.Provider value={{cart, addToCart, cantProdEnCart}}>
        {props.children}
    </CartContext.Provider>;
};

export default CartProvider;