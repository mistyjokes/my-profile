import React from "react";
import { Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/Projects/Project";
import proj from "./components/Projects/githubProjects";


export default function App() {
  return (

      <Router>
        <div>

          <div className="star">  
            <nav className="header">
              
                <li className="items"> <Link to="/" style={{textDecoration:'none'}}>Home</Link> </li>
                <li className="items"> <Link to="/about" style={{textDecoration:'none'}}>About</Link> </li>
                <li className="items"> <Link to="/projects" style={{textDecoration:'none'}}>Projects</Link> </li>
                <li className="items"> <Link to="/contact" style={{textDecoration:'none'}}>Contact Me</Link> </li>
            </nav>
          </div>
        <div>
            <Switch>
              <Route path="/proj" component={proj}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/about" component={About}/>
              <Route path="/projects" component={Project}/>
              <Route path="/" component={Home} /> 
            </Switch>
          </div>
        </div>
      </Router>
  );
}



