import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Catalogo from "./views/Catalogo/Catalogo";
import Producto from "./views/Producto/Producto";
import {CartContextProvider} from "./context/CartContextProvider";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop-boutique" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/producto/:itemId" element={<Producto />} />
            <Route path="/catalogo/:categoryDesc" element={<Catalogo />}/>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
  }