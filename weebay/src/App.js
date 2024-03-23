import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Registration from './components/Registration';
import GetProducts from './components/GetProducts';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/products' element={<GetProducts />} />
        </Routes>
      </div>
    </Router>   
  );
}


export default App;
