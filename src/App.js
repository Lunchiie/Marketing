import React from "react";
import Header from "./Components/Header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from "./Components/Registration/RegistrationForm";
import Login from "./Components/Login/login";
import { BrowserRouter as Router, Route, } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" exact component={Login} />
        <Route path="/RegistrationForm/" component={RegistrationForm} />
        <Route path="/Header/" component={Header} />
      </div>
    </Router>
  );
}

export default AppRouter;
