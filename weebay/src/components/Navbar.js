import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Navbar() {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isAuthenticated && (
        <li>
          <Link to="/login">login</Link> 
        </li>
        )}
        {!isAuthenticated && (
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        )}
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar;
