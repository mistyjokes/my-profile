import React from "react";
import { Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";


export default function App() {
  return (

      <Router>
        <div>
          <nav className="header">
            
              <li className="items"> <Link to="/">Home</Link> </li>
              <li className="items"> <Link to="/about">About</Link> </li>
              <li className="items"> <Link to="/projects">Projects</Link> </li>
              <li className="items"> <Link to="/contact">Contact Me</Link> </li>
          </nav>
        <div>
            <Switch>
            <Route path="/contact"> <Contact /> </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/" component={Home} />
              
            </Switch>
          </div>
        </div>
      </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function Contact(){
  return <h2>Contact</h2>
}


