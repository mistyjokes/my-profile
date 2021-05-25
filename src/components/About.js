import React, {Component} from "react";
import "../styles/About.css"
import {Link} from "react-router-dom";
import resume from "../files/ReneCleverResume3_10_21_2nd.pdf";
import resIcon from "../images/resume.png";
import rene from "../images/clever.rene.JPG";




class About extends Component {

    render(){

        //Icon from: <a href="https://iconscout.com/icons/resume" target="_blank">Resume Icon</a> by <a href="https://iconscout.com/contributors/iconscout" target="_blank">Iconscout Freebies</a>

         let message = " Hey, I'm Rene. I'm a born and raised brooklynite from NYC. I've received my B.S. in Computer Science and minored  \
                         in Business Management at Lehman College. I love programming and am knowledgable in langauages such as \
                         Java, Python, Android, and much more. When I'm not programming, I'm busy being an Anime/Manga enthusiast. \
                         To learn about my credientials, download my resume below.";
        
        //add photo of myself here


        
        return(
            <div >

                <div className="para-container">                
                    <p><b> {message} </b> </p>
                    <div> 
                        <Link style={{color:'black'}} to= {resume} target="_blank" download> 
                        <div className="resIcon"> <img src={resIcon} alt="res-icon"/> </div> <b> Resume</b></Link>
                    </div>
                </div>

                <div className="photo-container">
                    <div className="rene">
                        <img src={rene} alt="rene"/>
                    </div>
                </div>
            </div>

        );
        
    }
}
export default About;