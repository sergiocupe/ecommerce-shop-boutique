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
  const {cantidad, incrementarCantidad, decrementarCantidad} = useContador(0,producto.count)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cantidad * producto.price*100)
  }, [cantidad, producto.price])

  const handleAgregarCarrito = () => {
    if (cantidad > 0) {
      if (agregarItem(producto,cantidad))
      {
        mostrarMensaje("Se agrego el producto correctamente al carrito\n","success",1500)
      }
      else
        mostrarMensaje("El producto ya existe en el carrito\n","error",1500)
    } else {
      mostrarMensaje(
        "Debe ingresar una cantidad mayor que 0 para agregar al carrito\n",
        "info",1500
      )
    }
  }

  return (
    <>
    {(producto.title!=null)?    
      <Row>
      <Col xs={4}>
        <img alt={producto.title} src={producto.image} className="imgDetalle-custom" />
      </Col>
      <Col>
        <p className="tituloDetalle-custom">{producto.title}</p>
        <p className="tituloDescripcio-custom">{producto.description}</p>
        <p className="categoriaDetalle-custom">{(producto.category.toUpperCase() === "WOMEN'S CLOTHING"? "PRENDAS FEMENINAS" : "PRENDAS MASCULINAS")}</p>
        <p className="precioDetalle-custom">{darFormatoNumero(producto.price*100)}</p>
        <p className="precioTotal-custom">Total: {darFormatoNumero(total)}</p>
        <ItemCount
          cantidad={cantidad}
          stock={producto.count}
          handleDecrementarCantidad={decrementarCantidad}
          handleIncrementarCantidad={incrementarCantidad}
          handleAgregarCarrito={handleAgregarCarrito}
        />
      </Col>
    </Row>
    :
    <div className="prodNoExiste-custom">
      <img  src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Producto No existente"  className="imgProdNoExiste-custom" />
      <br/>
      Producto no existente!<br/>Por favor seleccione un producto del catalogo.
      </div>
  }
    </>
  )
}
