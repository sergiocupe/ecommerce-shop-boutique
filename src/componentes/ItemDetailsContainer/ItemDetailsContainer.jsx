import "./ItemDetailsContainer.css"
import ItemDetails from "../ItemDetails/ItemDetails"
import {Container, Row, Spinner} from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useProducto } from "../../hooks/useProducto"

export default function ItemDetailsContainer() {

  const itemId = useParams().itemId
  const {producto,isLoading} = useProducto(itemId)

  return (
    <Container className="cardDetalle-custom">
      <Row>
        {isLoading ? <Spinner animation="border" /> : ({producto} && <ItemDetails producto={producto}/>)}
     </Row>
    </Container>
    )
}
