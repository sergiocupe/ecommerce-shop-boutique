import {useState} from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

export const useContador = (valorInicial, stock) =>{
  const MySwal = withReactContent(Swal)

  const [cantidad, setCantidad] = useState(valorInicial)

  const decrementarCantidad = () => {
    cantidad > 0 && setCantidad(cantidad - 1)
  }

  const incrementarCantidad = () => {
    cantidad < stock ? setCantidad(cantidad + 1) : mostrarMensaje()
  }

  const mostrarMensaje = () => {
    MySwal.fire({
      position: 'center',
      icon: 'info',
      title: 'Le sentimos.\nNo hay más stock disponible para este producto!\n',
      showConfirmButton: true,
      timer: 2500
    })
  }

  return {cantidad, incrementarCantidad, decrementarCantidad}
}
