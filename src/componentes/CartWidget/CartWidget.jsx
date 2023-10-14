import "./CartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useState, useContext } from "react"
import { darFormatoNumero } from "../../helpers/formatoNumero"
import { CartContext } from "../../context/CartContextProvider"
import { mostrarMensaje } from "../../helpers/mensajeria"
import { collection, addDoc} from "firebase/firestore"
import { db } from "../../firebase/config"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"

export default function CartWidget() {
  const pedidosRef = collection(db,"orders")

  const { carrito, totalItemsCarrito, totalPrecioCarrito, eliminarItem, vaciarCarrito } = useContext(CartContext)

  const [show, setShow] = useState(false)
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [emailConfirm, setEmailConfirm] = useState("")
  const [nombreObligatorio, setNombreObligatorio] = useState(false)
  const [apellidoObligatorio, setApellidoObligatorio] = useState(false)
  const [mensajeEmail, setMensajeEmail] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (nombre.length === 0) 
      setNombreObligatorio(true)
    else 
      setNombreObligatorio(false)

    if (apellido.length === 0) 
      setApellidoObligatorio(true)
    else 
      setApellidoObligatorio(false)

    if (email !== emailConfirm || email.length === 0 || emailConfirm.length === 0) {
      setMensajeEmail(true)
    } else {
      setMensajeEmail(false)
    }

    if (totalItemsCarrito()===0)
      mostrarMensaje("El carrito se encuentra vacío, debe seleccionar algún item para la compra.\n","error")

    if (nombre.length > 0 && apellido.length > 0 && email === emailConfirm && totalItemsCarrito()>0)
    {
      vaciarCarrito()
      setApellido("")
      setNombre("")
      setEmail("")
      setEmailConfirm("")

      const pedido ={
        cliente:{nombre:nombre, apellido:apellido,email:email},
        productos: carrito,
        total: totalPrecioCarrito(),
        fecha: new Date()
      }

      addDoc(pedidosRef,pedido)

      mostrarMensaje("Gracias por su compra\nNos contactaremos con usted a la brevedad.","success")
    }

  }

  const handleEmailConfirm=(e) => {
      setEmailConfirm(e.target.value)
      if (e.target.value !== email) 
        setMensajeEmail(true)
      else
        setMensajeEmail(false)
  }

  return (
    <>
      <div className="CartWidget">
        <FontAwesomeIcon
          icon={faCartShopping}
          bounce
          size="lg"
          style={{ color: "#4f88a1", cursor: "pointer" }}
          onClick={handleShow}
        />
        <span className="totalItems">({totalItemsCarrito()})</span>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon
              icon={faCartShopping}
              size="1x"
              style={{ color: "#4f88a1" }}
            />
            <span className="modalTitulo-custom">Carrito de Compras</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="modalDatos-custom">
              <div className="row">
                <div className="column1">Nombre:</div>
                <div className="column">
                  <Form.Control
                    size="sm"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
              </div>
              {nombreObligatorio && (
                <Form.Label className="campoNoValido-custom">
                  * Campo Obligatorio
                </Form.Label>
              )}
              <div className="row">
                <div className="column1">Apellido:</div>
                <div className="column">
                  <Form.Control
                    size="sm"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </div>
              </div>
              {apellidoObligatorio && (
                <Form.Label className="campoNoValido-custom">
                  * Campo Obligatorio
                </Form.Label>
              )}
              <div className="row">
                <div className="column1">Email:</div>
                <div className="column">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    id="email"
                    size="sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>{" "}
              {mensajeEmail && (
                <Form.Label className="campoNoValido-custom">
                  * Campo obligatorio y ambos emails deben coincidir
                </Form.Label>
              )}
              <div className="row">
                <div className="column1">Confirma Email:</div>
                <div className="column">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    id="emailConfirm"
                    size="sm"
                    value={emailConfirm}
                    onChange={handleEmailConfirm}
                  />
                </div>
              </div>
              {mensajeEmail && (
                <Form.Label className="campoNoValido-custom">
                  * Campo obligatorio y ambos emails deben coincidir
                </Form.Label>
              )}
            </div>
            <div className="modalItems-custom">
              {totalItemsCarrito() === 0 ? (
                <div>No hay items en el carrito</div>
              ) : (
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
                    <div>
                      <Button
                        variant="light"
                        size="sm"
                        onClick={() => eliminarItem(item.id)}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          size="sm"
                          style={{ color: "#4f88a1", cursor: "pointer" }}
                        />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="modalTotal-custom">
              Total: {darFormatoNumero(totalPrecioCarrito())}
            </div>
            <Form.Group className="buttons-custom">
              <Button variant="primary" type="submit" className="button-custom">
                Confirmar
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
