import "./App.css";
import React from "react";
import Registro from "./registro";
import Login from "./login";
import fecha from "./fecha";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import ReactDOM, { render } from "react-dom";

class Main extends React.Component {
  render() {
    return (
      
      <BrowserRouter>
        <div>
          <ul className="header">
            <li>
              <NavLink to="/registro">Registro</NavLink>
            </li>
            <li>
            <NavLink to="/login">login</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route path="/registro" component={Registro} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </BrowserRouter>
      
    );
  }

  
}


export default Main;
