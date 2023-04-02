import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props)=>{
    const [cart, setCart] = useState([]);
    // suma productos al cart, si ya esta, le suma la cantidad al que ya existe
    const addToCart = (item, cantidad) =>{
        if(isInCart(item.id)){ 
            cart[cart.findIndex(producto => producto.id === item.id)].cantidad += cantidad;
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

    // Para borrar todos los productos del carrito.
    const deleteAll = () => {
        setCart ([]);
    }

    // Para eliminar un solo item.
    const deleteOne = (item)=>{
        let position = cart[cart.findIndex(producto => producto.id === item.id)];
        cart.spice(position,1);
    }

    const isInCart = (id)=>{
        return cart.some((prod)=>prod.id === id);
    }

    return <CartContext.Provider value={{cart, addToCart, cantProdEnCart, deleteAll, deleteOne}}>
        {props.children}
    </CartContext.Provider>;
};

export default CartProvider;