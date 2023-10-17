import "./CartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useState, useContext, useEffect } from "react"
import { darFormatoNumero } from "../../helpers/formatoNumero"
import { CartContext } from "../../context/CartContextProvider"
import { mostrarMensaje } from "../../helpers/mensajeria"
import { collection, addDoc} from "firebase/firestore"
import { db } from "../../firebase/config"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import {useForm} from "react-hook-form"

export default function CartWidget() {
  const {register, handleSubmit, watch, reset, formState:{errors}} = useForm({defaultValues:{nombre:"",apellido:"",email:"",emailConfirm:""}})

  const pedidosRef = collection(db,"orders") 

  const { carrito, totalItemsCarrito, totalPrecioCarrito, eliminarItem, vaciarCarrito } = useContext(CartContext)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
   
  const enviarForm=(data) => {
    
    if (totalItemsCarrito()===0)
      mostrarMensaje("¡Hay un carrito que llenar!\nActualmente no tenés productos en tu carrito.\n","error")

    if (data.nombre.length > 0 && data.apellido.length > 0 && data.email === data.emailConfirm && totalItemsCarrito()>0)
    {
       const pedido ={
        cliente:{data},
        productos: carrito,
        total: totalPrecioCarrito(),
        fecha: new Date()
        }

      addDoc(pedidosRef,pedido)
      vaciarCarrito()
      reset()

      mostrarMensaje("Gracias por su compra\nNos contactaremos con usted a la brevedad.","success")
    }   
  }

  //Manejo del localstorage cada vez que cambia el carrito, se actualiza el localstorage
  useEffect(() =>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
  },[carrito])

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
          <Form onSubmit={handleSubmit(enviarForm)}>
            <div className="modalDatos-custom">
              <div className="row">
                <div className="column1">Nombre:</div>
                <div className="column">
                  <Form.Control
                    size="sm"
                    {...register("nombre",{
                      required:{value:true, message: "* El nombre es obligatorio"},
                      minLength:{value:2, message: "* El nombre debe contener al menos 3 caracteres"},
                      maxLength:{value:20, message: "* El nombre no puede contener mas de 20 caracteres"}
                    }
                    )}
                  />
                </div>
              </div>
              {errors.nombre && <Form.Label className="campoNoValido-custom">{errors.nombre.message}</Form.Label>}
              <div className="row">
                <div className="column1">Apellido:</div>
                <div className="column">
                  <Form.Control
                    size="sm"
                    {...register("apellido",{
                      required:{value:true, message: "* El apellido es obligatorio"},
                      minLength:{value:2, message: "* El apellido debe contener al menos 3 caracteres"},
                      maxLength:{value:20, message: "* El apellido no puede contener mas de 20 caracteres"}
                    }
                    )}
                  />
                </div>
              </div>
              {errors.apellido && <Form.Label className="campoNoValido-custom">{errors.apellido.message}</Form.Label>}
              <div className="row">
                <div className="column1">Email:</div>
                <div className="column">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    size="sm"
                    {...register("email",{
                      required:{
                        value:true, 
                        message: "* El email es obligatorio"
                      },
                      pattern:{
                        value:/.+@.+\.[A-Za-z]+$/,
                        message:"Formato inválido"
                      }
                    }
                    )}
                  />
                </div>
              </div>{" "}
              {errors.email && <Form.Label className="campoNoValido-custom">{errors.email.message}</Form.Label>}
              <div className="row">
                <div className="column1">Confirma Email:</div>
                <div className="column">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    size="sm"
                    {...register("emailConfirm",{
                      required:{
                        value:true, 
                        message: "* El email es obligatorio"
                      },
                      pattern:{
                        value:/.+@.+\.[A-Za-z]+$/,
                        message:"Formato inválido"
                      },
                      validate: value => value === watch("email") || "El email debe coincidir con el anterior"
                      }
                    )}
                  />
                </div>
              </div>
              {errors.emailConfirm && <Form.Label className="campoNoValido-custom">{errors.emailConfirm.message}</Form.Label>}
            </div>
            <div className="modalItems-custom">
              {totalItemsCarrito() === 0 ? (
                <div className="carritoVacio-custom">¡Hay un carrito que llenar!<br/>Actualmente no tenés productos en tu carrito.</div>
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
