import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/itemDetailContainer/:idNumber' element={<ItemDetailContainer/>}/>
            <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/about' element={<About/>}/>
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
