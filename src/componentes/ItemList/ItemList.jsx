import "./ItemList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { pedirProductos } from "../../helpers/pedirProductos";
import Item from "../Item/Item";
import { Row, Col, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ItemList() {
  const categoryDesc = useParams().categoryDesc;

  const [titulo, setTitulo] = useState("");
  const [itemsProductos, setItemsProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTitulo(categoryDesc ? "Prendas " + (categoryDesc === "women's clothing"? "Femeninas" : "Masculinas") : "");
    setIsLoading(true);
    pedirProductos()
      .then((res) => {
        setIsLoading(false);
        if (categoryDesc)
          setItemsProductos(
            res.filter((prod) => prod.category === categoryDesc)
          );
        else setItemsProductos(res);
      })
      .catch((err) => {
        setItemsProductos([]);
      });
  }, [categoryDesc]);

  return (
    <>
      {titulo && (
        <p>
          <FontAwesomeIcon
            icon={faShirt}
            size="lg"
            style={{ color: "#4f88a1" }}
          />
          <span className="tituloCategoria-custom">{titulo}</span>
        </p>
      )}
      <Row className="listadoProd-custom">
        {isLoading ? (
          <Spinner animation="border" />
        ) : itemsProductos.length !== 0 ? (
          itemsProductos.map((item, index) => (
            <Col key={index}>
              <Item prod={item} />
            </Col>
          ))
        ) : (
          <h2>No se encontraron resultados</h2>
        )}
      </Row>
    </>
  );
}
