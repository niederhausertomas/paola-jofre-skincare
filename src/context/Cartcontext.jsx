import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props)=>{
    const [cart, setCart] = useState([]);
    // suma productos al cart, si ya esta, le suma la cantidad al que ya existe
    const addToCart = (item, cantidad) =>{
        if(isInCart(item.id)){ 
            const cartActualizado = cart.map((prodDelCarrito) => {
                if (prodDelCarrito.id === item.id) {
                    prodDelCarrito.cantidad += cantidad
                }
                return prodDelCarrito;
            });
            setCart(cartActualizado);
        } else {
            setCart([...cart, {...item, cantidad}]);
        }      
    }
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

    // Total de la compra.
    const totalCompra = () =>{
        let total =0;
        for(let i=0;i<cart.length;i++){
            total += (cart[i].cantidad * cart[i].price)
        }
        return total.toFixed(2);
    }

    // Para eliminar un solo item.
    const deleteOne = (id)=>{
        let prodFiltrados = cart.filter(producto => producto.id !== id);
        setCart(prodFiltrados)
    }

    // eliminar un producto de un item 
    const restarUnoDeItem = (id) =>{
        const cartActualizado = cart.map((producto) => {
            if (producto.id === id) {
                if( (producto.cantidad - 1) ===0){
                    deleteOne(producto.id)
                    // la funcion deleteOne aca no esta funcionando !!!!!!!!!!!!!!
                }else{
                    return { ...producto, cantidad: producto.cantidad - 1 };
                }
            }
            return producto;
          });
          setCart(cartActualizado);
    }

        // Sumar un producto de un item
        // falta agregar que no se pase del stock que hay del producto
        const sumarUnoDeItem = (id) =>{
            const cartActualizado = cart.map((producto) => {
                if (producto.id === id) {
                  return { ...producto, cantidad: producto.cantidad + 1 };
                }
                return producto;
              });
              setCart(cartActualizado);
        }

    const isInCart = (id)=>{
        return cart.some((prod)=>prod.id === id);
    }

    return  <CartContext.Provider value={{
                cart,
                addToCart,
                cantProdEnCart,
                deleteAll,
                deleteOne,
                totalCompra,
                restarUnoDeItem,
                sumarUnoDeItem}}>
                {props.children}
            </CartContext.Provider>;
};

export default CartProvider;