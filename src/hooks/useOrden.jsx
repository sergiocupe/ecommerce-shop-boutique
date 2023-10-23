import { useState } from "react"
import { mostrarMensaje } from "../helpers/mensajeria"
import { getDoc, doc} from "firebase/firestore"
import { db } from "../firebase/config"

export const useOrden=()=>{
  const [carritoDetalle, setCarritoDetalle] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [totalCarrito, setTotalCarrito] = useState([])

  const pedirOrden_FIREBASE = (id) => {
    const itemRef = doc(db,"orders",id)
    return new Promise((resolve, reject) => {
        resolve(        
          getDoc(itemRef).then((elm) => {
            return { ...elm.data(), id: elm.id}
          })
          )
        reject("Error al obtener la orden");
    });
  };

  const obtenerDetalleOrden=(nroOrden)=>{
  setIsLoading(true)
  pedirOrden_FIREBASE(nroOrden)
  .then((data) => {
    if (data.productos)
      {
        setCarritoDetalle(data.productos)
        setTotalCarrito(data.total)
      }
      else
      {
        mostrarMensaje("Nro de Orden no existente.\n Intente nuevamente","error",5000)
      }
   })
  .catch(err=>
     mostrarMensaje("Nro de Orden no existente.\n Intente nuevamente","error",5000)
  )
  .finally(() => {
      setIsLoading(false)
   })
  }

  return {obtenerDetalleOrden, carritoDetalle, setCarritoDetalle, isLoading, totalCarrito, setTotalCarrito}
}