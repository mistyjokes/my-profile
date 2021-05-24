import React, { Component } from 'react';
import "../styles/Contact.css";
import linkIcon from "../images/link.png";




class Appointment extends Component{
    constructor(props) {
      super(props);
  
      this.state = {
          Name: " ",
          Email: " ",
          Message: " ",
          
      };

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
      
    }
  
    
  
    handleNameChange = event => {
      this.setState({ 
          Name: event.target.value
          });  
    }
  
    handleEmailChange = event => {
      this.setState({
        Email: event.target.value
      });
    }
  
    handleMessageChange = event => {
      this.setState({
        Message: event.target.value
      });
    }

  
  
  
    onFormSubmit = (event) => {

      this.setState({  
        Name: " ",
        Email: " ",
        Message: " "
      });
      
      alert("You've sent me an email! Thanks!")
  
      

      event.preventDefault();
    }
  
  
    render(){
      
  
      return(
        <form className="form-container" id="contactForm" onSubmit = {this.onFormSubmit}>
            <div> <h1 className="headingD"> Contact Me </h1></div>

          <div>
                <label className="colorScheme">Name:</label>
                <input type="text" onChange= {this.handleNameChange} value={this.state.Name} ></input>
          </div>

          <br/> <br/>

          <div>
                <label className="colorScheme">Email:</label>
                <input type="email" onChange= {this.handleEmailChange} value={this.state.Email} ></input>
          </div>

          <br/> <br/>

          <div>
                <label for="paragraph" className="colorScheme" >Message:</label>
                <textarea id="paragraph" name="paragraph" rows="7" cols="70" form="contactForm" value={this.state.Message} onChange={this.handleMessageChange}> </textarea>
          </div>
  
          <br/> <br/>

          {/* <div className="info">
          <img src={linkIcon} alt={"link-icon"} />
          </div>   ADD THIS LATER*/}
  
          <button onClick = {this.onFormSubmit}> <b>Submit</b> </button>
  
        </form>
  
      )
    }
  
  }
  export default Appointment; 