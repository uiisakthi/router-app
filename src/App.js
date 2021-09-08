import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Products from "./components/products";
import About from "./components/about";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <strong>Uii Commerce</strong>
          </div>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
