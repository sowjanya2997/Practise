import React from "react";


import { Button } from 'react-bootstrap';  
import { homedir } from "os";
class Hello extends React.Component {
    constructor(props){
        super();
        this.state={
            age:props.initialAge
        };
    }
    onChangedAge(){
        this.setState=({
            age:this.state.age+=3
        });
       // console.log(this.state.age)
    }

    render() {
        return ( 
            <div>
                <h1>Hello {this.props.name} <span className="label label-default">New</span> </h1>
                <h2>Your age is {this.state.age}</h2>
                <button className="btn btn-primary" onClick={()=>this.onChangedAge()}>Please click</button>
                <Button bsStyle='success'>Hello</Button>
                <br/>
                <br/>
                <hr/>
                <br/>
            </div>
        );
        
    }
}
/*
Hello.propTypes = {
    name:React.PropTypes.string,
    initialAge:React.PropTypes.number
}
*/

export default Hello;