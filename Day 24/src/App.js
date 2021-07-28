import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { Auth } from "./Auth";

export default function App() {
  return (
    <div>
      <Router>
        <div className="content">
          <nav>
            <ul className="navbar">
              <li>
                <Link className="nav" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="nav" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Auth>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about" component={About} />
              {/* <About /> */}

              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Auth>
          </Switch>
        </div>
      </Router>
    </div>
  );
}