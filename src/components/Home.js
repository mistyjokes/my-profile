import React, {Component} from "react";
import "../styles/Home.css"
import userIcon from "../images/profile.PNG"



class Home extends Component {

    render(){
        return(
            <div>
                <div className="Icon">
                    <img src={userIcon} alt={"user-icon"} /> </div>


                <div className="greeting">
                    <h1> Welcome to my website!</h1>

                    <div> <h2>My Name is Rene Clever</h2> </div> 
                    
                    </div>



            </div>

        );
        
    }
}
export default Home;