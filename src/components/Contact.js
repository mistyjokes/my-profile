import React, { Component } from 'react';





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
          <div>
                <label>Name:</label>
                <input type="text" onChange= {this.handleNameChange} value={this.state.Name} ></input>
          </div>

          <div>
                <label>Email:</label>
                <input type="email" onChange= {this.handleEmailChange} value={this.state.Email} ></input>
          </div>


          <div>
                <label for="paragraph">Message:</label>
                <textarea id="paragraph" name="paragraph" rows="7" cols="70" form="contactForm" value={this.state.Message} onChange={this.handleMessageChange}> </textarea>
          </div>
  
          <br/> <br/>
  
          <button onClick = {this.onFormSubmit}>Submit</button>
  
        </form>
  
      )
    }
  
  }
  export default Appointment; 