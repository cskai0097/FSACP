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
      <nav className='navbar'>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div className='right-links'>
            {!token && (
                <Link to="/signup">Sign Up</Link>
              )}
            {!token ? (
                <Link to="/login">Login</Link> 
            ) : (<div className='logout-button'>
                  <button onClick={logout}>Logout</button>
                </div>)}
                <Link to="/cart">Cart</Link> {/* This is the link to the cart page */}
          </div>

        </div>

      </nav>
    </div>
  );
};

export default Navbar;
