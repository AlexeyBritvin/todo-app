import React, { Component } from 'react';
import ToDoList from './ToDoList';
import Header from './Header';
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
        <Header addToDo={this.addToDo} />
        <ToDoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
