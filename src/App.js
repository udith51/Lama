import './App.css';
import Announcements from './components/Announcements';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Slider from './components/Slider'
import Categories from './components/Categories';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;