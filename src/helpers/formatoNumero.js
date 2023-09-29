export const darFormatoNumero = (valorInicial) => {
  const options2 = { style: "currency", currency: "USD" };
  const numberFormat2 = new Intl.NumberFormat("en-US", options2);
  const numeroFormateado = numberFormat2.format(valorInicial);
  return numeroFormateado 
};
