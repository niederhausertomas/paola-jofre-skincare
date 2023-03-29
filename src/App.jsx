import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Main from './components/Main/Main';
import Portada from './components/Portada/Portada';

function App() {
  return (
    <>
      <ItemDetailContainer 
        id = {1}
      />
      <Header />
      <Portada/>
      <Main/>
      <Footer />
    </>
  );
}

export default App;
