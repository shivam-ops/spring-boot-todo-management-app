import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./TodoApp.css";

class TodoApp extends React.Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/welcome/:name" component={WelcomeComponent} />
            <Route component={ErrorComponent} />
          </Switch>
        </Router>
        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

class WelcomeComponent extends React.Component {
  render() {
    return <div>Welcome {this.props.match.params.name}</div>;
  }
}

function ErrorComponent() {
  return (
    <div>An Error Occurred. I don't know what to do! Contact support!</div>
  );
}

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "shivam",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleChange(event) {
    //console.log("Handle Change ", event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    if (
      this.state.username === "shivam" &&
      this.state.password === "linkinspark"
    ) {
      console.log("Successful!");
      this.props.history.push(`/welcome/${this.state.username}`);
      this.setState({
        hasLoginFailed: false,
        showSuccessMessage: true,
      });
    } else {
      console.log("Failed");
      this.setState({
        showSuccessMessage: false,
        hasLoginFailed: true,
      });
    }
  }

  // handleUsernameChange(event) {
  //   console.log("Username>>> ", event.target.value);
  //   this.setState({
  //     username: event.target.value,
  //   });
  // }

  // handlePasswordChange(event) {
  //   console.log("Password>>> ", event.target.value);
  //   this.setState({
  //     password: event.target.value,
  //   });
  // }

  render() {
    return (
      <div>
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login sucessful</div>}
        {/* <ShowLoginSuccessMessage
          showSuccessMessage={this.state.showSuccessMessage}
        /> */}
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

export default TodoApp;
