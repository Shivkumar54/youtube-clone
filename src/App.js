import './App.css';
import BottomNav from './Components/Pages/bottomNavbar/bottomNav';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Pages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <BottomNav />
    </div>
  );
}

export default App;
