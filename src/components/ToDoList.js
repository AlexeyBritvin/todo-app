import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {
          this.props.todos.map((todo, index) => <ToDoItem key={index} todo={todo}/>)
        }
      </ul>
    );
  }
}

export default ToDoList;
