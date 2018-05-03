import React, { Component } from 'react';
import ToDoList from './ToDoList';
import Header from './Header';
import todoSamples from '../samples';
import '../styles/App.css';

class App extends Component {
  state = {
    todos: []
  }

  loadSamples = () => {
    this.setState({todos: todoSamples});
  }

  addToDo = todo => {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  deleteToDo = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  }

  completeTask = index => {
    const todos = [...this.state.todos];
    const todo = todos[index];
    todo.complete = !todo.complete;
    this.setState({ todos });
  }

  componentDidMount() {
    this.loadSamples();
  }

  render() {
    return (
      <div className="app">
        <Header addToDo={this.addToDo} />
        <ToDoList todos={this.state.todos} deleteToDo={this.deleteToDo} completeTask={this.completeTask} />
      </div>
    );
  }
}

export default App;
