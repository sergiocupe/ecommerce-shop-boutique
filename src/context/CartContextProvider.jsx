import { createContext, useState } from "react"

export const CartContext = createContext({carrito:[]})

export const CartContextProvider = ({ children }) => {

  if (!localStorage.getItem("carrito"))
    localStorage.setItem("carrito", [])

  //Inicializa el localstorage con el array de items que tiene sino lo inicializa con []
  const [carrito, setCarrito] = useState(localStorage.getItem("carrito").length>0 ? JSON.parse(localStorage.getItem("carrito")):[])

  const agregarItem = (item, cantidad) => {
    if (!existeEnCarrito(item.id)) {
      setCarrito((prev) => [...prev, { ...item, cantidad }]);
      return true
    } else {
      return false
    }
  }

  const existeEnCarrito = (id) => {
    return carrito.some((prod) => prod.id === id);
  }

  const vaciarCarrito = () => {
    localStorage.setItem("carrito", [])
    setCarrito([]);
  }

  const eliminarItem = (itemId) => {
    let carritoActualizado = carrito.filter((prod) => prod.id !== itemId);
    setCarrito(carritoActualizado);
  }

  const totalPrecioCarrito = () => {
    return carrito.reduce(
      (acc, prod) => (acc += prod.price * 100 * prod.cantidad),
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
