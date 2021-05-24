import React, {Component} from 'react';
import {Link} from "react-router-dom";
import patientPortal from "./image/patientPortal.gif";
import "./style/Project.css";


class githubProjects extends Component {


    render(){
        return(
            <div> 
                <h1 style={{color: "white", textDecoration: "underline white", paddingLeft: 20}}>Sample Patient Portal</h1> 

                <div className="gif-holder">
                    <img src={patientPortal} alt="patientPortal"/>
                </div>

                <div className="descripPara">
                    <p className="textDesign">This is a basic patient portal I made for my software engineering class. More features will be added but for now
                        it books an appointment with name, department, doctor, date, and first visit question. I created the application
                        using React, Datepicker, Form, and lists. BlockChain and ProvenDB will be connected with it in the near future. </p>
                     <a style={{color:'blue'}} rel="noopener noreferrer" href="https://github.com/mistyjokes/sample-patient-portal" target="_blank"> Sample Patient Portal</a>
                </div>
            
            
            
            </div>
            
        );
    }



}


export default githubProjects;

