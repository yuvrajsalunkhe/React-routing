import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useLocation,
    useParams      
  } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import './App.css';

function App() {
  return (
    <Router>
      
      <div className="navbar-collapse">
        <nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            {/* not found Path */}
            <Route path="*">
              <Notfound />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}
const Notfound = () => {
  let location = useLocation(); 
  return  <h1>No match for <code>{location.pathname}</code></h1>
}
export default App;
