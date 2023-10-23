import "./ItemList.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShirt } from "@fortawesome/free-solid-svg-icons"
import Item from "../Item/Item"
import { Row, Col, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useProductos } from "../../hooks/useProductos"

export default function ItemList() {
  const categoryDesc = useParams().categoryDesc
  const { itemsProductos, isLoading } = useProductos(categoryDesc)

  return (
    <>
      {categoryDesc && (
        <p>
          <FontAwesomeIcon
            icon={faShirt}
            size="lg"
            style={{ color: "#4f88a1" }}
          />
          <span className="tituloCategoria-custom">
            {categoryDesc === "women's clothing"
              ? "Prendas Femeninas"
              : categoryDesc === "men's clothing"
              ? "Prendas Masculinas"
              : "Electrónica"}
          </span>
        </p>
      )}
      <div className="listadoProd-custom">
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
      </div>
    </>
  )
}
