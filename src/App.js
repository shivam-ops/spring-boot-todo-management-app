import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./components/todo/TodoApp";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}

export default App;
