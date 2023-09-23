import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Catalogo from './views/Catalogo/Catalogo';
import Producto from './views/Producto/Producto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/shop-boutique" element={<Home/>}/>
          <Route exact path="/catalogo" element={<Catalogo/>}/>
          <Route exact path="/producto/:itemId" element={<Producto/>}/>
          <Route exact path="/catalogo/:categoryDesc" element={<Catalogo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
