import React from "react";
import Hello from "./hello";
import Form from "./form";
import rabbit from "../images/rabbit.svg";
import Header from "../Header"


//import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';

import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';


import Example from "./example";

const imgStyle = {
    width:'100px',
    height:'100px'
  };




const App = () => (
    <div>   
        <div className="container" >
            <div className="row">
            <div className="col-md-8 ">
                    
                   
                </div>
                <div className="col-md-4">
                    <Header/> 
                   
                </div>
                <marquee >Hello pushpa<span className="badge">5</span></marquee>
                
            </div>
        </div>

        <Hello name={"Sowjanya"} initialAge={3}></Hello>
        
        <Form/>

        <img src={rabbit} style={imgStyle}></img>
    
    </div>
);

export default App;