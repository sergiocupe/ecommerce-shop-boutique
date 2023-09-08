import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import "./CartWidget.css"

export default function CartWidget() {
  let totalItems = 5
  return (
    <div className="CartWidget">
      <FontAwesomeIcon
        icon={faCartShopping}
        bounce
        size ="lg"
        style={{color: "#4f88a1"}}/>
      <span className="totalItems">({totalItems})</span>
    </div>
  )
}
