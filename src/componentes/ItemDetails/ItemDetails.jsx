import "./ItemDetails.css"
import ItemCount from "../ItemCount/ItemCount"
import { Row, Col } from "react-bootstrap"
import { mostrarMensaje } from "../../helpers/mensajeria"
import { useState, useEffect, useContext } from "react"
import { useContador } from "../../hooks/useContador"
import { darFormatoNumero } from "../../helpers/formatoNumero"
import  {CartContext}  from "../../context/CartContextProvider"

export default function ItemDetails({ producto }) {
  const {agregarItem} = useContext(CartContext)
  const { cantidad, incrementarCantidad, decrementarCantidad } = useContador(0,producto.stock)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cantidad * producto.precio)
  }, [cantidad])

  const handleAgregarCarrito = () => {
    if (cantidad > 0) {
      if (agregarItem(producto,cantidad))
        mostrarMensaje("Se agrego el producto correctamente al carrito\n","success")
      else
        mostrarMensaje("El producto ya existe en el carrito\n","error")
    } else {
      mostrarMensaje(
        "Debe ingresar una cantidad mayor que 0 para agregar al carrito\n",
        "info"
      )
    }
  }

  return (
    <Row>
      <Col xs={4}>
        <img
          src={`${process.env.PUBLIC_URL}/productos/${producto.imagen}`}
          className="imgDetalle-custom"
        />
      </Col>
      <Col>
        <p className="tituloDetalle-custom">{producto.titulo}</p>
        <p className="tituloDescripcio-custom">{producto.descripcion}</p>
        <p className="categoriaDetalle-custom">{producto.categoria}</p>
        <p className="precioDetalle-custom">{darFormatoNumero(producto.precio)}</p>
        <p className="precioTotal-custom">Total: {darFormatoNumero(total)}</p>
        <ItemCount
          cantidad={cantidad}
          stock={producto.stock}
          handleDecrementarCantidad={decrementarCantidad}
          handleIncrementarCantidad={incrementarCantidad}
          handleAgregarCarrito={handleAgregarCarrito}
        />
      </Col>
    </Row>
  )
}
