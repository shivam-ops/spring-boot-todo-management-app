import React from "react";
import { Link, withRouter } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

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

export default withRouter(Header);
