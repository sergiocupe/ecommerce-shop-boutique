import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "./ItemCount.css"

export default function ItemCount({ stock }) {
  const MySwal = withReactContent(Swal)

  const [cantidad, setCantidad] = useState(0)

  const decrementarCantidad = () => {
    cantidad > 0 && setCantidad(cantidad - 1)
  }

  const incrementarCantidad = () => {
    cantidad < stock ? setCantidad(cantidad + 1) : mostrarMensaje()
  }
  
  const mostrarMensaje = () => {
    MySwal.fire({
      position: 'center',
      icon: 'info',
      title: 'Le sentimos.\nNo hay más stock disponible para este producto!\n',
      showConfirmButton: true,
      timer: 2500
    })
  }

  return (
    <>
      <div className="itemCount-custom">
        <Button
          variant="secondary"
          size="sm"
          onClick={decrementarCantidad}
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
        <Button variant="secondary" size="sm" onClick={incrementarCantidad}>
          +
        </Button>       
        <Button variant="primary" size="sm" className="botonCarrito-custom">
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
