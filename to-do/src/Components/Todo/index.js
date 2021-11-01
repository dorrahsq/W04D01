import React from "react";
// import "./style.css";
import TodoItem from "../TodoItem";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoarray: [
        { Id: 1, name: "sleep" },
        { Id: 2, name: "walk" },
      ],
    };
  }

  createNew = (e) => {
    e.preventDefault(); //نشيل الفعل التلقائي للفورم الي هو ابديت كل شوي
    let obj = {
      Id: this.state.todoarray.length + 1,
      name: e.target.inside.value,
    };
    this.setState({ todoarray: [...this.state.todoarray, obj] });
    e.target.inside.value = "";
  };

  deletitem=(Id)=>{
    // {console.log(Id)}
    this.setState({ todoarray:  this.state.todoarray.filter((item) =>  item.Id !== Id) });
  }


  render() {
    return (
      <>
        <h1>To Do list</h1>
        <form onSubmit={this.createNew}>
          <ul>
            {console.log(this.state.todoarray)}
           
            {this.state.todoarray.map((item, i) => (
                <TodoItem  todos={item}  key={i} deletitem={this.deletitem}  /> //This  {} is passed as a prop
              ) 
            )}
          </ul>
          <input type="text" name="inside" />
          <button>add </button>
        </form>
      </>
    );
  }
}

export default Todo;
