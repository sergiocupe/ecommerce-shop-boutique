import productos from "../data/productos.json"

export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
      reject("Error al obtener los productos")
    }, 2000)
  })
}
export const pedirProductoPorId = (id) => {
  const prod = productos.find(o => o.id === id)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(prod)
      reject("Producto no encontrado")
    }, 2000)
  })
}