import "./ItemDetails.css";
import { useContador } from "../../hooks/CustomHooks";
import ItemCount from "../ItemCount/ItemCount";
import { Row, Col } from "react-bootstrap";
import { mostrarMensaje } from "../../helpers/mensajeria";
import { useState, useEffect } from "react";

export default function ItemDetails({ producto }) {
  const options2 = { style: 'currency', currency: 'USD' };
  const numberFormat2 = new Intl.NumberFormat('en-US', options2);

  const { cantidad, incrementarCantidad, decrementarCantidad } = useContador(
    0,
    producto.stock
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cantidad * producto.precio);
  }, [cantidad]);

  const handleAgregarCarrito = () => {
    if (cantidad > 0) {
      console.log({ ...producto, cantPedido: cantidad, totalCompra: total });
      mostrarMensaje(
        "Se agrego el producto correctamente al carrito\n","success"
      );
    } else {
      mostrarMensaje(
        "Debe ingresar una cantidad mayor que 0 para agregar al carrito\n","info"
      );
    }
  };

  return (
    <Row>
      <Col xs={4}>
        <img
          src={`${process.env.PUBLIC_URL}/productos/${producto.imagen}`}
          className="imgDetalle-custom"
        />
      </Col>
      <Col>
        <p className="tituloDetalle-custom">{producto.titulo}</p>
        <p className="tituloDescripcio-custom">{producto.descripcion}</p>
        <p className="categoriaDetalle-custom">{producto.categoria}</p>
        <p className="precioDetalle-custom">{numberFormat2.format(producto.precio)}</p>
        <p className="precioTotal-custom">Total: {numberFormat2.format(total)}</p>
        <ItemCount
          cantidad={cantidad}
          stock={producto.stock}
          handleDecrementarCantidad={decrementarCantidad}
          handleIncrementarCantidad={incrementarCantidad}
          handleAgregarCarrito={handleAgregarCarrito}
        />
      </Col>
    </Row>
  );
}
