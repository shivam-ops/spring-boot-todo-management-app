import React from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        // {
        //   id: 1,
        //   description: "Learn React",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 2,
        //   description: "Become an expert at React",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 3,
        //   description: "Find a Job in Japan",
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 4,
        //   description: "Become an expert at Front End Web Developement",
        //   done: false,
        //   targetDate: new Date(),
        // },
      ],
    };
  }

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      console.log(response);

      this.setState({
        todos: response.data,
      });
    });
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

export default ListTodosComponent;
