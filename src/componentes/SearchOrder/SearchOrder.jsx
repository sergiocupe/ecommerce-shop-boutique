import "./SearchOrder.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { Spinner } from "react-bootstrap";
import { darFormatoNumero } from "../../helpers/formatoNumero"
import { useOrden } from "../../hooks/useOrden"

export default function SearchOrder() {
  const {obtenerDetalleOrden, carritoDetalle, setCarritoDetalle, isLoading, totalCarrito, setTotalCarrito}=useOrden()
  const {register,handleSubmit,reset, formState: { errors }} = useForm({ defaultValues: { nroOrden: "" } })
  const [show, setShow] = useState(false)

  const handleClose = () => {
    reset()
    setCarritoDetalle([])
    setTotalCarrito(0)
    setShow(false)    
  }
  const handleShow = () => setShow(true)

  const enviarForm = (data) => {
    obtenerDetalleOrden(data.nroOrden)
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
          {isLoading ? (
          <Spinner animation="border" />
            ) : 
           carritoDetalle.map((item, index) => (
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
