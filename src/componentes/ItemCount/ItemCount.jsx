import { Button, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import "./ItemCount.css"

export default function ItemCount({ cantidad, stock, handleDecrementarCantidad, handleIncrementarCantidad,  handleAgregarCarrito }) {

  return (
    <>
      <div className="itemCount-custom">
        <Button
          variant="secondary"
          size="sm"
          onClick={handleDecrementarCantidad}
          active={cantidad < 1 ? "true" : "false"}
        >
          -
        </Button>
        <Form.Control
          variant="text"
          disabled
          size="sm"
          value={cantidad}
          className="inputStock-custom"
        ></Form.Control>
        <Button variant="secondary" size="sm" onClick={handleIncrementarCantidad}>
          +
        </Button>       
        <Button variant="primary" size="sm" className="botonCarrito-custom" onClick={handleAgregarCarrito}>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="iconoCarrito-custom"
          />
          Agregar
        </Button>
      </div>
      <div className="stockLabel-custom">
          <Form.Label className="stock-custom" >Stock disponible: {stock-cantidad}</Form.Label >
      </div>
    </>
  )
}
