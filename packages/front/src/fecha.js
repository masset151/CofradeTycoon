import "./App.css";
import React from "react";
import ReactDOM, { render } from "react-dom";

function fecha() {
    const hora = (
      <div>
        <p id="reloj"> Hoy es {new Date().toLocaleDateString()}</p>
      </div>
    );
  
    const user = {
      firstName: "Andres",
      lastName: "Masset",
    };
  
    function formatName(user) {
      return user.firstName + " " + user.lastName;
    }
  
    const element = <p>Bienvenido, {formatName(user)}</p>;
  
    return (
      ReactDOM.render(element, document.getElementById("root")) +
      ReactDOM.render(hora, document.getElementById("reloj"))
    );
  }
  
  export default fecha;