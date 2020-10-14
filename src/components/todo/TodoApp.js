import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";
import AuthenticatedRoute from "./AuthenticatedRoute";
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

class Header extends React.Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-brand">
              <Link to="/">ShivamJS</Link>
            </div>
            <ul className="navbar-nav">
              {isUserLoggedIn && (
                <li>
                  <Link className="nav-link" to="/welcome/shivam">
                    Home
                  </Link>
                </li>
              )}
              {isUserLoggedIn && (
                <li>
                  <Link className="nav-link" to="/todos">
                    Todos
                  </Link>
                </li>
              )}
            </ul>

            <ul className="navbar-nav navbar-collapse justify-content-end">
              {!isUserLoggedIn && (
                <li>
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                </li>
              )}
              {isUserLoggedIn && (
                <li>
                  <Link
                    className="nav-link"
                    to="/logout"
                    onClick={AuthenticationService.logout}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">All rights reserved 2020 @ShivamJS.</span>
      </footer>
    );
  }
}

class LogoutComponent extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <h1>You are logged out!</h1>
        <div className="container">Thank You for using our application.</div>
      </div>
    );
  }
}

class ListTodosComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn React",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: "Become an expert at React",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: "Find a Job in Japan",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 4,
          description: "Become an expert at Front End Web Developement",
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Target Date</th>
                <th>Is Completed?</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>{todo.done.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class WelcomeComponent extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          <div>
            Welcome {this.props.match.params.name}. You can manage your todos{" "}
            <Link to="/todos">here</Link>
          </div>
        </div>
      </>
    );
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
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
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
        <h1>Login</h1>
        <div className="container">
          {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
          {this.state.hasLoginFailed && (
            <div className="alert alert-danger">Invalid Credentials</div>
          )}
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
          <button className="btn btn-success" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default TodoApp;
