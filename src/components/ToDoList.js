import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo, index) => <ToDoItem key={index} todo={todo}/>)
        }
      </ul>
    );
  }
}

export default ToDoList;
