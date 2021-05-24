import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style/Project.css';
import proj from './githubProjects';

class Project extends Component {


    render() {
        return(
            <div className="flex-container">
                <div className="shape box-container">
                    <div className="layout" style={{color:"white"}}>Live Projects</div>
                    <div className="layout" style={{color:"white"}}> <Link to="/proj" style={{textDecoration:'none', color:'white'}}>GitHub Projects</Link> </div>
                </div>

            </div>
        );

    }
}




export default Project;