import { createContext, useState } from "react"

export const CartContext = createContext({carrito:[]})

export const CartContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const agregarItem = (item, cantidad) => {
    if (!existeEnCarrito(item.id)) {
      setCarrito((prev) => [...prev, { ...item, cantidad }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  }

  const existeEnCarrito = (id) => {
    return carrito.some((prod) => prod.id === id);
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  const eliminarItem = (itemId) => {
    const carritoActualizado = carrito.filter((prod) => prod.id !== itemId);
    setCarrito(carritoActualizado);
  }

  const totalPrecioCarrito = () => {
    return carrito.reduce(
      (acc, prod) => (acc += prod.precio * prod.cantidad),
      0
    )
  }

  const totalItemsCarrito = () => {
    return carrito.reduce((cant,prod)=>(cant+=prod.cantidad),0)
  }

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarItem,
        eliminarItem,
        vaciarCarrito,
        totalPrecioCarrito,
        totalItemsCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;
