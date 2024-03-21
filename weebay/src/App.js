import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GetProducts from './components/GetProducts';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
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
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/registration' component={Registration} />
          <Route path='/products' component={GetProducts} />
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h1 style={{fontSize:"300%"}}>Weebay</h1>
      <p>Welcome to Weebay. Our finest selection of fake clothing and accessories.</p>
    </div>
  );
}

export default App;
