import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import Header from "./Header";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import Footer from "./Footer";
import LogoutComponent from "./LogoutComponent";

import "./TodoApp.css";

class TodoApp extends React.Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <AuthenticatedRoute
              path="/welcome/:name"
              component={WelcomeComponent}
            />
            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <Footer />
        </Router>
        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

export default TodoApp;
