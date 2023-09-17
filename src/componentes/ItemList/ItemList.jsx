import "./ItemList.css"
import {pedirProductos} from "../../helpers/pedirProductos"
import Item from "../Item/Item"
import { Row, Col, Spinner } from "react-bootstrap"
import { useState, useEffect } from "react"

export default function ItemList() {
  const [itemsProductos, setItemsProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        setIsLoading(false)
        setItemsProductos(res)
      })
      .catch((err) => {
        setItemsProductos([])
      })
  }, [])

  return (
    <>
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
  )
}
