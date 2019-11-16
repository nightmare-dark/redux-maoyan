import React, { Component } from "react";
import store from "../store";
import { addTodo } from "../action";

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: store.getState().todos
    };
  }

  renderItem = () => {
    return this.state.todos.map(item => <li key={item.id}>{item.task}</li>);
  };

  add = e => {
    if (e.keyCode == 13) {
      addTodo(e.target.value);
      e.target.value = "";
    }
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        todos: store.getState().todos
      });
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <input type="text" onKeyUp={this.add} />
        <ul>{this.renderItem()}</ul>
      </div>
    );
  }
}
