import "./ItemDetailsContainer.css"
import { pedirProductoPorId } from "../../helpers/pedirProductos"
import ItemDetails from "../ItemDetails/ItemDetails"
import { useState, useEffect } from "react"
import {Container, Row, Spinner} from "react-bootstrap"


export default function ItemDetailsContainer({itemId}) {

  const [producto, setProducto] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    pedirProductoPorId(itemId)
      .then((res) => {
        setIsLoading(false)
        setProducto(res)
      })
      .catch((err) => {
        setProducto([])
      })
  }, [itemId])

  return (
    <Container className="cardDetalle-custom">
      <Row>
        {isLoading ? <Spinner animation="border" /> : ({producto} && <ItemDetails producto={producto}/>)}
     </Row>
    </Container>
    )
}
