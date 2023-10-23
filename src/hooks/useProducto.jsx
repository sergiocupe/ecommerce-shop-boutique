import { useState, useEffect } from "react"
import { getDoc, doc} from "firebase/firestore"
import { db } from "../firebase/config"

export const useProducto = (itemId) => {
  const [producto, setProducto] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const pedirProductosPorID_FIREBASE = (id) => {
    const itemRef = doc(db, "productos", id)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          getDoc(itemRef).then((elm) => {
            return { ...elm.data(), id: elm.id }
          })
        )
        reject("Error al obtener los productos")
      }, 1000)
    })
  }

  const obtenerProducto = (id) => {
    setIsLoading(true)
    if (id) {
      pedirProductosPorID_FIREBASE(id)
        .then((res) => {
          setProducto(res)
        })
        .catch((err) => {
          setProducto([])
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  useEffect(() => {
    obtenerProducto(itemId)
  }, [itemId])

  return { producto, isLoading }
}
