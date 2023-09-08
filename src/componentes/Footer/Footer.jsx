import "./Footer.css"
import {Container, Row, Col} from "react-bootstrap"

export default function Footer() {
  return (
    <Container fluid>
      <Row>
        <Col className="copyright">
          Todos los derechos reservados 2023 Ⓒ Castillo Legal Sergio
        </Col>
      </Row>
    </Container>
  )
}
