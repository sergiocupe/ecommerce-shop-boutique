import { useState, useEffect } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

export const useProductos = (categoryDesc) => {
  const [itemsProductos, setItemsProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const pedirProductos_FIREBASE = () => {
    const itemsCollection = collection(db, "productos")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          getDocs(itemsCollection).then((res) => {
            return res.docs.map((elm) => ({ ...elm.data(), id: elm.id }))
          })
        )
        reject("Error al obtener los productos")
      }, 1000)
    })
  }

  const pedirProductosPorCategoria_FIREBASE = (categoria) => {
    const itemsCollection = query(
      collection(db, "productos"),
      where("category", "==", categoria)
    )
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          getDocs(itemsCollection).then((res) => {
            return res.docs.map((elm) => ({ ...elm.data(), id: elm.id }))
          })
        )
        reject("Error al obtener los productos")
      }, 1000)
    })
  }

  const obtenerProductos = (categ) => {
    setIsLoading(true)
    if (categ) {
      pedirProductosPorCategoria_FIREBASE(categ)
        .then((res) => {
          setItemsProductos(res)
        })
        .catch((err) => {
          setItemsProductos([])
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      pedirProductos_FIREBASE()
        .then((res) => {
          setItemsProductos(res)
        })
        .catch((err) => {
          setItemsProductos([])
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  useEffect(() => {
    obtenerProductos(categoryDesc)
  }, [categoryDesc])

  return { itemsProductos, isLoading }
}
