import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Context from './components/Context';
import About from './components/About';
import Cart from './components/Cart';
import Login from './components/Login';
import SignIn from './components/SignIn'
import Spla from './components/Spla';
import Products from './components/Products';
import Kids from './components/Kids';
// import CartContext from './components/CartContext';

import { Router, Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';

 






function App() {

  const [show, setshow] = useState(true)
  
  useEffect(() => {
    const time = setTimeout(() => {
      setshow(false)
    },1000);
  })






 
  return (
    <>
      {/* <CartContext></CartContext> */}
      {show ? <Spla /> : <div><Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Men' element={<Men />} />
          <Route path='/Women' element={<Women />} />
          <Route path='/Kids' element={<Kids />} />
          <Route path='/Context' element={<Context />} />
          <Route path='/About' element={<About />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignIn' element={<SignIn />} />
          
        </Routes></div>}
      
     
    
      
    </>
  );
}

export default App;
