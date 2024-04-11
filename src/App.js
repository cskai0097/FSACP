// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import { CartProvider } from './components/CartContext';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/Signup';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <CartProvider>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </AuthProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
