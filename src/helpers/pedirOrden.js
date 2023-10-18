import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";


export const pedirOrden_FIREBASE = (id) => {
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
