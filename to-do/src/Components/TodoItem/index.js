import React from "react";
import "./style.css";

class TodoItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <li>
          {console.log(this.props.todos)};
          {this.props.todos.name}
          <span onClick={() => this.props.deletitem(this.props.todos.Id)}>
            X
          </span>
        </li>
      </>
    );
  }
}
export default TodoItem;
