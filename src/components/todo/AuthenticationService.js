class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("Registered Successfully");
    sessionStorage.setItem("authenticatedUser", username);
  }

  logout(username, password) {
    sessionStorage.removeItem("authenticatedUser", username);
  }
}

export default new AuthenticationService();
