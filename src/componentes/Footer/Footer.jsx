import "./Footer.css"
import { Container, Row, Col } from "react-bootstrap"

export default function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col className="footer-custom">
            <span className="copyright">
              Todos los derechos reservados 2023 Ⓒ Castillo Legal Sergio
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
