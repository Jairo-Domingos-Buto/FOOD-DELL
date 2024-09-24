import Navbar from "./components/Navbar/Navbar"
import './index.css'
import {Routes, Router} from 'react-router-dom'
import Home from "./pages/Home/home"
import Cart from "./pages/Cart/cart"
import PlaceOrder from "./pages/PlaceOrder/placeorder"


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Router path='/' element={<Home/>}/>
        <Router path='/cart' element={<Cart/>}/>
        <Router path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App
