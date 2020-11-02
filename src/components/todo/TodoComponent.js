import React from "react";

class TodoComponent extends React.Component {
  render() {
    return <div>Todo Component for id {this.props.match.params.id}</div>;
  }
}

export default TodoComponent;
