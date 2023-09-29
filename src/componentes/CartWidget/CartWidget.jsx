import "./CartWidget.css";
import "../../helpers/localStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
//import { inicializarProductosLocalStorage } from "../../helpers/localStorage";
import { darFormatoNumero } from "../../helpers/formatoNumero";
import { CartContext } from "../../context/CartContextProvider"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function CartWidget() {
  const {carrito, totalItemsCarrito, totalPrecioCarrito} = useContext(CartContext)

  //const carrito = localStorage.getItem("carritoShop") ? JSON.parse(localStorage.getItem("carritoShop")) : [];

  //const [totalCarrito, setTotalCarrito] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  console.log(carrito)

  // const obtenerTotalCarrito = () => {
  //   let total =0
  //   carrito.map(item => total= total + item.totalCompra)
  //   setTotalCarrito(total);
  // }

  // useEffect(() => {
  //   inicializarProductosLocalStorage();
  //   //obtenerTotalCarrito()
  // }, []);

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
            {carrito.map((item, index) => (
              <div key={index} className="modalItem-custom">
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/productos/${item.imagen}`}
                    className="imgProdModal-custom"
                  />
                </div>
                <div className="modalCantidad-custom">{item.cantidad}</div>
                <div className="modalDescrip-custom">{item.descripcion}</div>
                <div className="modalPrecio-custom">
                  {darFormatoNumero(item.precio)}
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    size="sm"
                    style={{ color: "#4f88a1", cursor: "pointer" }}
                  />
                </div>
              </div>
              
            ))}
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
