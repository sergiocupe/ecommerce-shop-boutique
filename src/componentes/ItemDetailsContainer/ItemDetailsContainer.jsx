import "./ItemDetailsContainer.css"
import { pedirProductoPorId } from "../../helpers/pedirProductos"
import ItemDetails from "../ItemDetails/ItemDetails"
import { useState, useEffect } from "react"


export default function ItemDetailsContainer({itemId}) {

  const [producto, setProducto] = useState([])

  useEffect(() => {
    pedirProductoPorId(itemId)
      .then((res) => {
        setProducto(res)
      })
      .catch((err) => {
        setProducto([])
      })
  }, [itemId])

  return (
    <>
      {producto && <ItemDetails producto={producto}/>}
    </>
    )
}
