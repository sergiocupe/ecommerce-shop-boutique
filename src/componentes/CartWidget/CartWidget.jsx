import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { darFormatoNumero } from "../../helpers/formatoNumero";
import { CartContext } from "../../context/CartContextProvider";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function CartWidget() {
  const { carrito, totalItemsCarrito, totalPrecioCarrito, eliminarItem } = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <div className="modalItems-custom">
            {totalItemsCarrito()===0 ? 
              <div>No hay items en el carrito</div>
             : 
              carrito.map((item, index) => (
                <div key={index} className="modalItem-custom">
                  <div>
                    <img src={item.image} className="imgProdModal-custom" />
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
            }
          </div>
          <div className="modalTotal-custom">
            Total: {darFormatoNumero(totalPrecioCarrito())}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Confirmar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
