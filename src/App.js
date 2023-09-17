import Header from './componentes/Header/Header';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Footer from './componentes/Footer/Footer';
import ItemDetailsContainer from './componentes/ItemDetailsContainer/ItemDetailsContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer greeting="Catálogo de productos"/>
      <Footer/>
    </div>
  );
}

export default App;
