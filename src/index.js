import React from "react";
import ReactDOM from "react-dom";
import "../src/Assets/App.css";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom"



ReactDOM.render(
  <Router>
    <App />,
    <Route />,
  </Router>,
  document.getElementById("root")
);

export default Router;

