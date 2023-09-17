import productos from "../data/productos.json"

export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
      reject("Error")
    }, 1500)
  })
}
export const pedirProductoPorId = (id) => {
  const prod = productos.find(o => o.id === id)

  return new Promise((resolve, reject) => {
      resolve(prod)
      reject("Producto no encontrado")
  })
}