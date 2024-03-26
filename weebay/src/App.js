import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/AuthContext.js';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import Registration from './components/Registration.js';
import GetProducts from './components/GetProducts.js';
import Login from './components/Login.js';



function App() {
  return (
    <Router>
      <div>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<GetProducts />} />
            <Route path ='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
        </AuthProvider>
      </div>
    </Router>   
  );
}


export default App;
