import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductInfo from './pages/ProductInfo';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

export default function App() {
  return (
    <div className="App">
      <Home />
      <ProductList />
      <ProductInfo />
      <Register />
      <Login />
      <Cart />
    </div>
  );
}