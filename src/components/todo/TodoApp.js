import React from "react";
import "./TodoApp.css";

class TodoApp extends React.Component {
  render() {
    return (
      <div className="TodoApp">
        <LoginComponent />
      </div>
    );
  }
}

class LoginComponent extends React.Component {
  render() {
    return (
      <div>
        User Name: <input type="text" name="username" />
        Password: <input type="password" name="password" />
        <button>Login</button>
      </div>
    );
  }
}

export default TodoApp;
