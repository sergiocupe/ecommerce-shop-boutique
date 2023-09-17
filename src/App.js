import Header from './componentes/Header/Header';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Footer from './componentes/Footer/Footer';
import ItemDetails from './componentes/ItemDetails/ItemDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer greeting="Catálogo de productos"/>
      <Footer/>
      <ItemDetails id={3}/>
    </div>
  );
}

export default App;
