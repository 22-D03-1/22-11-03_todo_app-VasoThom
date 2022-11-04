import { Component } from "react";
import classNames from "classnames";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], newid: 0 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: this.state.newid,
      label: e.target[0].value,
      done: false,
    };
    if (!newTodo.label) return;
    this.setState((state) => ({
      todos: [...state.todos, newTodo],
      newid: state.newId + 1,
    }));
    e.target[0].value = "";
  }
  handleTodoClick(index) {
    const updatedtodos = this.state.todos;
    updatedtodos[index].done = !updatedtodos[index].done;
    this.setState((state) => ({ ...state, todos: updatedtodos }));
  }

  render() {
    return (
      <>
        <div className="container">
          <h1>To-do : My List</h1>
          {this.state.todos.map((todo, index) => (
            <div
              id="input"
              key={todo.id}
              onClick={() => this.handleTodoClick(index)}
              className={classNames({ done: todo.done })}
            >
              {todo.label}
            </div>
          ))}
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="todo" />
            <input className="button" type="submit" value="add todo" />
          </form>
        </div>
      </>
    );
  }
}
export default Todo;
