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

  componentDidMount() {
    this.loadSamples();
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
