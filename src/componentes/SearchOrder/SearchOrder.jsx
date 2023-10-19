import "./SearchOrder.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { pedirOrden_FIREBASE } from "../../helpers/pedirOrden"
import { mostrarMensaje } from "../../helpers/mensajeria"
import { darFormatoNumero } from "../../helpers/formatoNumero"

export default function SearchOrder() {

  const [carrito, setCarrito] = useState([])
  const [totalCarrito, setTotalCarrito] = useState(0)

  const {register,handleSubmit,reset, formState: { errors }} = useForm({ defaultValues: { nroOrden: "" } })

  const [show, setShow] = useState(false)

  const handleClose = () => {
    reset()
    setCarrito([])
    setTotalCarrito(0)
    setShow(false)    
  }
  const handleShow = () => setShow(true)

  const enviarForm = (data) => {
    pedirOrden_FIREBASE(data.nroOrden)
    .then((data) => {
      if (data.productos.length>0)
      {
        setCarrito(data.productos)
        setTotalCarrito(data.total)
      }
      else
        mostrarMensaje("Nro de Orden no existente.\n Intente nuevamente","error",5000)
      })
    .catch(err=>
      mostrarMensaje("Error al obtener la orden " + err,"error",5000)
      )
    } 

  return (
    <>
      <div className="SearchOrderIcono-custom">
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          style={{ color: "#4f88a1", cursor: "pointer" }}
          onClick={handleShow}
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon
              icon={faSearch}
              size="1x"
              style={{ color: "#4f88a1" }}
            />
            <span className="modalTitulo-custom">
              Buscador de Orden de Compra
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(enviarForm)} className="formOrden-custom">
            <div className="modalDatos-custom">
              <div className="row">
                <div className="column1">Nro de Orden:</div>
                <div className="column">
                  <Form.Control
                    size="sm"
                    {...register("nroOrden", {
                      required: {
                        value: true,
                        message: "* Debe ingresar un numero de orden",
                      },
                    })}
                  />
                </div>
              </div>
              {errors.nroOrden && (
                <Form.Label className="campoNoValido-custom">
                  {errors.nroOrden.message}
                </Form.Label>
              )}
            </div>
            <Button
              variant="primary"
              size="sm"
              className="botonCarrito-custom"
              type="submit"
            >
              <FontAwesomeIcon
                icon={faSearch}
                className="iconoCarrito-custom"
              />
              Consultar
            </Button>
            <hr className="linea-custom"></hr>
          </Form>
          <div className="modalItems-custom">
          {carrito&&
           carrito.map((item, index) => (
                  <div key={index} className="modalItem-custom">
                    <div>
                      <img src={item.image} className="imgProdModal-custom" alt={item.title} />
                    </div>
                    <div className="modalCantidad-custom">{item.cantidad}</div>
                    <div className="modalDescrip-custom">{item.title}</div>
                    <div className="modalPrecio-custom">
                      {darFormatoNumero(item.price * 100)}
                    </div>
                  </div>
                ))
           }
          </div>
          <div className="modalTotal-custom">Total: {darFormatoNumero(totalCarrito)}</div>
          <Form.Group className="buttons-custom">
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Form.Group>
        </Modal.Body>
      </Modal>
    </>
  )
}
