import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

export const mostrarMensaje = (mensaje, icono) => {
  MySwal.fire({
    position: 'center',
    icon: icono,
    title: mensaje,
    showConfirmButton: true,
    timer: 2500
  })
}