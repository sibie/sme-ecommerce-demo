import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { Product } from './Pages/Product';
import { Home } from './Pages/Home';
import { ProductCategory } from './Pages/ProductCategory';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Footer } from './Components/Footer/Footer';
import machines_banner from './Components/Assets/banner_placeholder.png'
import equipment_banner from './Components/Assets/banner_placeholder.png'
import tools_banner from './Components/Assets/banner_placeholder.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/machines' element={<ProductCategory banner={machines_banner} category="machines"/>} />
          <Route path='/equipment' element={<ProductCategory banner={equipment_banner} category="equipment"/>} />
          <Route path='/tools' element={<ProductCategory banner={tools_banner} category="tools"/>} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
