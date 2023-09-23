import "./ItemDetails.css"
import { useContador } from "../../hooks/CustomHooks"
import ItemCount from "../ItemCount/ItemCount"
import { Row, Col } from "react-bootstrap"

export default function ItemDetails({ producto }) {

  const {cantidad, incrementarCantidad, decrementarCantidad} = useContador(0,producto.stock);

  const handleAgregarCarrito = ()=>{
    console.log({...producto, cantPedido:cantidad})
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
        <ItemCount cantidad={cantidad} stock={producto.stock} handleDecrementarCantidad={decrementarCantidad} handleIncrementarCantidad={incrementarCantidad} handleAgregarCarrito={handleAgregarCarrito} />
      </Col>
    </Row>
  )
}
