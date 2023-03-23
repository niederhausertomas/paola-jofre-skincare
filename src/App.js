import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Main from './components/Main/Main';
import Portada from './components/Portada/Portada';

function App() {
  return (
    <>
      <ItemListContainer saludo = "Holaaaaa!!"/>
      <Header />
      <Portada/>
      <Main/>
      <Footer />
    </>
  );
}

export default App;
