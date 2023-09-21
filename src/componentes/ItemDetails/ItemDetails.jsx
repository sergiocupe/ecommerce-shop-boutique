import "./ItemDetails.css"
import ItemCount from "../ItemCount/ItemCount"
import { Row, Col } from "react-bootstrap"

export default function ItemDetails({ producto }) {

  const handleAgregarCarrito = ()=>{
    console.log("Agregar Carrito")
  }
  return (
    <Row>
      <Col xs={4}>
        <img src={`${process.env.PUBLIC_URL}/productos/${producto.imagen}`} className="imgDetalle-custom" />
      </Col>
      <Col>
        <p className="tituloDetalle-custom">{producto.titulo}</p>
        <p className="tituloDescripcio-custom">{producto.descripcion}</p>
        <p className="categoriaDetalle-custom">{producto.categoria}</p>
        <p className="precioDetalle-custom">$ {producto.precio}</p>
        <ItemCount stock={producto.stock} handleAgregarCarrito={handleAgregarCarrito} />
      </Col>
    </Row>
  )
}
