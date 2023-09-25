import Carousel from "react-bootstrap/Carousel";
import "./ControlledCarousel.css";

export default function ControlledCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/banner-rebajas.jpg`}
          alt="Banner 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/banner-sale.jpg`}
          alt="Banner 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"          
          src={`${process.env.PUBLIC_URL}/images/banner-especial.jpg`}
          alt="Banner 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}
