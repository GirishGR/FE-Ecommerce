import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import {useSelector} from 'react-redux'
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";


const Navbar = () => {
  const products = useSelector(state=>state.cart.products)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const openSignUp= ()=>{
    setIsLogin(false)
    setIsModalOpen(true)
  }

  const openLogin= ()=>{
    setIsLogin(true)
    setIsModalOpen(true)
  } 

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold"> 
          <Link to="/">e-Shop</Link>
        </div>
      

      <div className="relative flex-1 mx-4">
        <form action="">
          <input type="text" placeholder="Search Product" className="w-full border py-2 px-4"/>
          <FaSearch className="absolute top-3 right-3 text-red-600"></FaSearch>
        </form>
      </div>
        <div className="flex items-center space-x-4">
          <Link to='/cart' className="relative" ><FaShoppingCart className="text-lg"/>
          {products.length > 0 && (<span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">{products.length}</span>)}
          </Link>
          <button className="hidden md:block" onClick={()=>{setIsModalOpen(true)}}>Login | Register</button>

          
          <button className="block md:hidden"><FaUser/></button>
        </div>
        </div>

        <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/shop" className="hover:underline">Shop</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/" className="hover:underline">About</Link>
        </div>


        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
          {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
        </Modal>
    </nav>
  );
};

export default Navbar;