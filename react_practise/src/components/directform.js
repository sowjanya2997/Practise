import React from "react";
import ReactDOM from "react-dom";
import rabbit from "./images/rabbit.svg";
//import {render} from "react-dom";
//import Hello from "./hello";

 /*function DirForm(){
          return(
                <h3>Hello</h3>
          );
     };

 const DirForm= () => {
      return(
           <h1>Hello</h1>
      )
      
 }
*/
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';

const imgStyle = {
     width:'100px',
     height:'100px'
   };
  
const divStyle = {
     width:'200px',
     border:'1px solid #D3D3D3',
     margin:'15px'
   };

   const containerStyle = {
    border: '3px solid #D3D3D3',
    'border-radius': '10px',
    'margin-top': '15px',
    'padding-left': '15px',
    'margin-bottom': '15px'
    }
    
 class DirForm extends React.Component{
     render(){
      return(
          <div className="container" style={containerStyle}>
           <div class="row">
        <div class="col-xs-6">
          <h2>Card Image</h2>
          <p>Image at the top </p>
          <div className="card" style={divStyle}>
            <img className="card-img-top" src={rabbit} style={imgStyle}/>
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
          </div>
          <div class="col-xs-6">
          <h2>Card Image</h2>
          <p>Image at the top (card-img-top):</p>
          <div className="card" style={divStyle}>
            <img className="card-img-top" src={rabbit} style={imgStyle}/>
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
          </div>
          </div>
          
         
          
          
        </div>
      );
     }
 }

 ReactDOM.render(
    <DirForm/>,
    document.getElementById("next")
);
//render(DirForm);

export default DirForm;