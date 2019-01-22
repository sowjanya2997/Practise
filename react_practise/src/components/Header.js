import React from "react";
//import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';



/*<nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">Home </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>*/

 class Header extends React.Component{
    render(){
        return(
            <div>
        
  
            

        <nav className="navbar navbar-light bg-dark justify-content-between">
  <a className="navbar-brand">Crime-Analysis         </a>
  
  <form className="form-inline">
    <input className="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
            </div>
           

      
           

        );
    }

}

export default Header;