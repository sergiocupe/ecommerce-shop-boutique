import Layout from "../Layout";
import { Row, Col } from "react-bootstrap";
import "./Home.css"
import ControlledCarousel from "../../componentes/ControlledCarousel/ControlledCarousel";

export default function Home() {
  return (
    <Layout>
      <Row className="contenidoHome-custom">
        <Col xs={12}>
          <h1 className="tituloHome-custom">Gracias por visitar nuestra tienda online</h1>
          <p className="subtituloHome-custom">Disfruta de todas las promociones que tenemos para vos</p>
        </Col>
        <Col>
        <ControlledCarousel/>
        </Col>
        <Col xs={12}>
          <img className="bannerHome-custom"
            src={`${process.env.PUBLIC_URL}/images/banner_giftcard.png`}
          ></img>
        </Col>
      </Row>
    </Layout>
  );
}
