import "./ItemDetails.css"
import { pedirProductoPorId } from "../../helpers/pedirProductos"
import ItemCount from "../ItemCount/ItemCount"
import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"

export default function ItemDetails({ id }) {
  const [producto, setProducto] = useState([])

  useEffect(() => {
    pedirProductoPorId(id)
      .then((res) => {
        setProducto(res)
      })
      .catch((err) => {
        setProducto([])
      })
  }, [id])

  return (
    <Container className="cardDetalle-custom">
      <Row>
        <Col xs={4}>
          <img src={`${process.env.PUBLIC_URL}/productos/${producto.imagen}`} />
        </Col>
        <Col>
          <p className="tituloDetalle-custom">{producto.titulo}</p>
          <p className="tituloDescripcio-custom">{producto.descripcion}</p>
          <p className="categoriaDetalle-custom">{producto.categoria}</p>
          <p className="precioDetalle-custom">$ {producto.precio}</p>
          <ItemCount stock={producto.stock}/>
        </Col>
      </Row>
    </Container>
  )
}
