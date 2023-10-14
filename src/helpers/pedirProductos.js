import { db } from "../firebase/config";
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";

export const pedirProductos_API = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => json)
      );
      reject("Error al obtener los productos");
    }, 2000);
  });
};

export const pedirProductoPorId_API = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((json) => json)
      );
      reject("Producto no encontrado");
    }, 2000);
  });
};

export const pedirProductos_FIREBASE = () => {
  const itemsCollection = collection(db, "productos");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(        
        getDocs(itemsCollection).then((res) => {
          return res.docs.map((elm) => ({ ...elm.data(), id: elm.id})
          )
        })
        )
      reject("Error al obtener los productos");
    }, 1000);
  });
};

export const pedirProductosPorID_FIREBASE = (id) => {
  const itemRef = doc(db,"productos",id)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(        
        getDoc(itemRef).then((elm) => {
          return { ...elm.data(), id: elm.id}
        })
        )
      reject("Error al obtener los productos");
    }, 1000);
  });
};

export const pedirProductosPorCategoria_FIREBASE = (categoria) => {
const itemsCollection = query(collection(db, "productos"),where("category","==",categoria))
return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(        
        getDocs(itemsCollection).then((res) => {
          return res.docs.map((elm) => ({ ...elm.data(), id: elm.id}));
       }))
      reject("Error al obtener los productos");
    }, 1000);
  });
};

//Metodo para cargar todos los productos de mi JSON al Firebase
// export const agregarProducto = ()=> {
//   const orderCollection = collection(db, "productos");
//   productos.map((producto) => (
//     addDoc(orderCollection, producto).then(({id})=> console.log(id))
//   ))
// }
