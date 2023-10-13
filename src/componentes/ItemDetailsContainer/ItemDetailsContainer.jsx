import "./ItemDetailsContainer.css"
import { pedirProductosPorID_FIREBASE } from "../../helpers/pedirProductos"
import ItemDetails from "../ItemDetails/ItemDetails"
import { useState, useEffect } from "react"
import {Container, Row, Spinner} from "react-bootstrap"
import { useParams } from "react-router-dom"


export default function ItemDetailsContainer() {

  const itemId = useParams().itemId
  const [producto, setProducto] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    pedirProductosPorID_FIREBASE(itemId)
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
