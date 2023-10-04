import productos from "../data/productos.json"

export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(        
          fetch("https://fakestoreapi.com/products")
          .then(res=>res.json())
          .then(json=>json)
      )
      reject("Error al obtener los productos")
    }, 2000)
  })
}
export const pedirProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(json=>json))
      reject("Producto no encontrado")
    }, 2000)
  })
}