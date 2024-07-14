import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { Product } from './Pages/Product';
import { Home } from './Pages/Home';
import { ShopCategory } from './Pages/ShopCategory';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tapes' element={<ShopCategory />} />
          <Route path='/pigments' element={<ShopCategory />} />
          <Route path='/adhesives' element={<ShopCategory />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
