import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import '../styles/App.css';

class App extends Component {
  state = {
    todos: []
  }

  addToDo = todo => {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  render() {
    return (
      <div className="app">
        <ToDoForm addToDo={this.addToDo} />
        <ToDoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
