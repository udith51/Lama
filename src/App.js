
import './App.css';
import Announcements from './components/Announcements';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Announcements />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
