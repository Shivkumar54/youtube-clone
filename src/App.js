import "./App.css"
import axios from "axios"
import BottomNav from "./Components/Pages/bottomNavbar/bottomNav"
import Home from "./Components/Pages/Home/Home"
import Navbar from "./Components/Pages/Navbar/Navbar"

// Axios Default Settings
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {}
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <BottomNav />
    </div>
  )
}

export default App
