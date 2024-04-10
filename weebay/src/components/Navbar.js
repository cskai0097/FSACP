// Navbar.js
import React, { useEffect } from 'react';
import "../css/Navbar.css";
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {

  const { token, logout } = useAuth(); //get the token from the authentication context

  useEffect(()=>{
    
    console.log("navbar: ", token)
  },[token])

  return (
    <div>
      <nav className="navbar">
  <Link to="/">Home</Link>
  <div className="right-links">
    {!token && <Link to="/signup">Sign Up</Link>}
    {!token ? <Link to="/login">Login</Link> : <button onClick={logout}>Logout</button>}
    <Link to="/cart">Cart</Link> 
    {token && <Link to="/checkout">Checkout</Link>}
  </div>
</nav>
    </div>
  );
};

export default Navbar;
