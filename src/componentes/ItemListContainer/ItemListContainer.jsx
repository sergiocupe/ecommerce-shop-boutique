import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import {Row, Col, Container } from "react-bootstrap"

export default function ItemListContainer({ greeting }) {
  return (
    <main className="main-custom">
      <Container >
      <Row>
          <Col className="container-titulo-custom">
            <h1 className="tituloProd-custom">{greeting}</h1>
          </Col>
        </Row>
          <ItemList/>
      </Container>
    </main>
  )
}
