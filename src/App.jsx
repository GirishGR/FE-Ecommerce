
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import InfoSection from "./Components/InfoSection"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import Login from "./Components/Login"
import Contact from "./Pages/Contact"

function App() {


  return (
    <>

       <BrowserRouter>
       <Navbar/>
       <Routes> 

            <Route path="/" element={<Home/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            

       </Routes>
       <Footer/>
       </BrowserRouter>
     </>
  )
}

export default App
