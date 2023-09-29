import { useState } from "react";
import { mostrarMensaje } from "../helpers/mensajeria";

export const useContador = (valorInicial, stock) => {
  const [cantidad, setCantidad] = useState(valorInicial);

  const decrementarCantidad = () => {
    cantidad > 0 && setCantidad(cantidad - 1);
  };

  const incrementarCantidad = () => {
    cantidad < stock
      ? setCantidad(cantidad + 1)
      : mostrarMensaje(
          "Le sentimos.\nNo hay más stock disponible para este producto!\n",
          "info"
        );
  };
  return { cantidad, incrementarCantidad, decrementarCantidad };
};

