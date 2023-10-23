import "./Item.css"
import { Card } from "react-bootstrap"
import {Link} from "react-router-dom"

export default function Item({ prod }) {
  const options2 = { style: 'currency', currency: 'USD' };
  const numberFormat2 = new Intl.NumberFormat('en-US', options2);

  return (
    <Card bg="light" className="mb-3 card-custom text-center">
      <Card.Img
        variant="top"
        src={prod.image}
        className="imgProducto-custom"
      />
      <Card.Body>
        <Card.Title className="titulo-custom">{prod.title}</Card.Title>
        <Card.Text className="descripcion-custom">{prod.description && prod.description.substring(0, 100)}...</Card.Text>
        <Card.Text>
          <span className="precio-custom">{numberFormat2.format(prod.price*100)}</span>
        </Card.Text>
        <Card.Text variant="footer">
          <Link className="botonVerDetalle-custom" to={`/producto/${prod.id}`}>Ver Detalle</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
