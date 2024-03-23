import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
