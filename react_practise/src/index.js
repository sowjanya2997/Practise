import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
//import DirForm from "./components/dirform";
import DirForm from "./components/directform";
const render = Component => ReactDOM.render(
    <App/>,
    document.getElementById("root")
);


render(DirForm);