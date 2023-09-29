export function inicializarProductosLocalStorage() {
  if (!localStorage["carritoShop"]) {
    localStorage.setItem("carritoShop", []);
  }
}

export function agregarProductoLocalStorage(producto) {
  let a = [];
  a = localStorage.getItem("carritoShop")
    ? JSON.parse(localStorage.getItem("carritoShop"))
    : [];
  a.push(producto);
  localStorage.setItem("carritoShop", JSON.stringify(a));
}
