<!-- PROJECT LOGO -->

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

<center>
 <a href="https://github.com/sergiocupe/shop-boutique">
    <img src="https://sergiocupe.github.io/shop-boutique/images/logo.png" width="184" height="100" alt="logoProyecto">
  </a>

## E-commerce para el curso de React en CoderHouse
### Video de navegación en la aplicación (click para ver)

  <a href="https://www.youtube.com/watch?v=BTGaWgtbBEg">
    <img src="http://img.youtube.com/vi/BTGaWgtbBEg/0.jpg" alt="SHOP-BOUTIQUE" >
  </a>
</center>

### Descripción del proyecto

Proyecto armado por el alumno **Sergio Castillo Legal** con la funcionalidad de un e-commerce creado para el curso de ReactJS de CoderHouse.

Para lograr su desarrollo y funcionamiento se crearon un conjunto de componenetes en ReactJS los cuales tienen como objetivo la construcción de un  sitio e-commerce funcional. 

### Componentes del proyecto

Se listan los componentes principales desarrollados:
* Header
* NavBar
* CartWidget
* SearhOrder
* Footer
* CartContextProvider
* ItemListContainer
* ItemList
* Item
* ItemDetailContainer
* ItemDetail
* ItemCount
* ControllerCarousel

Se listan los componentes que actuan como pages
* Layout
* Home
* Producto
* Catalogo

|     Componente      |       Descripción       |
|-------------------- |-------------------------|
| **Header**|Componente que contiene el NavBar, el componente con el icono del detalle del carrito y el checkout (CartWidget), y el icono de lupa para la busqueda de la orden.|
| **Navbar** | Componente que contiene los links para la navegación dentro de la app y el logo.|
| **CartWidget**| Componente del icono del carrito de compras, que al hacer click muestra en el detalle del carrito en un modal y el formulario de chekout de la compra, donde el cliente ingresa sus datos y realiza la compra |
|**SearhOrder**| Componente que contiene el icono de la lupa para la busqueda de la orden, contiene el formulario con el campo del ingreso de la orden y muestra el detalle de la compra realizada con el total |
| **Footer**| Componente con el diseño del pie de página de la web.|
|**ControllerCarousel**| Componente que contiene un carrousel de imagenes que se utiliza en la home|
|**Item**|Componente que se encarga de generar el diseño de los ítems que se muestran en la lista del catálogo. Contiene el boton al detalle del item.|
|**ItemList**| Componente que se encarga de listar todos los productos utilizando el componente Item y mostrar el titulo segun la categoria seleccionada. Utiliza los metodos del Custom Hook Productos para acceder a la base de datos Firebase|
|**ItemListContainer**|Componente contenedor del ItemList|
|**ItemDetail**|Componente con el detalle del producto seleccionado, utiiliza el Itemcount para la cantidad de productos y el boton de agregar al carrito.|
|**ItemDetailContainer**|Componente con la funcionalidad necesaria para crear el ItemDetail, los detalles del producto.|
|**ItemCount**|Componente para agregar o quitar N productos al carrito desde la sección de detalles del producto. Tiene el boton para agregar al carrito.|
| **CartContextProvider** |Componente con toda la programación para mostrar el estado del contenido del carrito de compras, las funciones de agregar y eliminar items y funciones de totales.|

## Instalación

Pasos para el uso de la aplicación una ve<> descargado el código fuente.

1) Ctrl+ñ para abrir una terminal
2) cd shop-boutique
3) npm install
4) npm start

### Caracteristicas

Utiliza librerias externas
Desarrollado con create-react-app

### Librerias externas a create-react-app
**Bootstrap:** Se lo utilizo para simplificar estilos y lineas de codigo css.
**Firebase:** Libreria de Servicios,se implemento para el almacenamiento de los productos y de las ordenes de compra. 
**React-router-dom:** Se implemento para el sistema de navegacion entre las paginas permitiendo que funcione como SPA.
**React-hook-form**: se utilizo para mejorar el desarrollo de los formularios, manteniendo el estándar HTML, reduciendo el número de re-renders y generando una mejor experiencia de usuario.
**Sweetalert**: se utilizo para todos los mensajes de la aplicación mejorar la experiencia de usuario con notificaciones avanzadas y con estilos.

### Tecnologías utilizadas

* [HTML]
* [CSS]
* [Bootstrap]
* [JavaScript]
* [ReactJS]
* [React-Bootstrap]
* [React-Hook-Form]
* [Sweetalert2]
* [Firebase]

### Contacto

<b>Sergio Castillo Legal</b> - sergiocupe@gmail.com

<b>Link del proyecto:</b> [https://github.com/sergiocupe/shop-boutique]
