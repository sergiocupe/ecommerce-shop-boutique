import './App.css';
import Header from './componentes/Header/Header';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer/>
      <Footer/>
    </div>
  );
}

export default App;
