import React, { Component } from 'react';
import ToDoList from './ToDoList';
import Header from './Header';
import TodoForm from './TodoForm';
import todoSamples from '../samples';
import { checkIfExpired } from '../helpers';
import '../styles/App.css';

class App extends Component {
  state = {
    todos: [],
    filterCase: '',
    todoFormIsOpen: false,
    isEditing: false,
    editingTodo: null
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

  updateTask = (updatedTodo) => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(todo => updatedTodo.id === todo.id);
    todos[index] = updatedTodo;
    this.setState({ todos });
  }

  completeTask = index => {
    const todos = [...this.state.todos];
    const todo = todos[index];
    todo.complete = !todo.complete;
    this.setState({ todos });
  }

  openTodoForm = ({todo=null, isEditing}) => {
    this.setState({
      isEditing,
      editingTodo: todo,
      todoFormIsOpen: true
     });
  };

  closeTodoForm = () => {
    this.setState({ todoFormIsOpen: false });
  }

  setFilterCase = (filterParam) => {
    this.setState({ filterCase: filterParam.toLowerCase() });
  }

  componentDidMount() {
    const myStorage = localStorage.getItem('todos')
    if (myStorage) {
      this.setState({todos: JSON.parse(myStorage)});
    } else {
      this.loadSamples();
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  render() {
    checkIfExpired(this.state.todos);

    return (
      <div className="app">
        <Header openTodoForm={this.openTodoForm} setFilterCase={this.setFilterCase}/>
        <ToDoList
          todos={this.state.todos}
          deleteToDo={this.deleteToDo}
          completeTask={this.completeTask}
          openTodoForm={this.openTodoForm}
          filterCase={this.state.filterCase} />
        {
          this.state.todoFormIsOpen
            ? <TodoForm
                isOpen={this.state.todoFormIsOpen}
                dialogCLose={this.closeTodoForm}
                addToDo={this.addToDo}
                todo={this.state.editingTodo}
                isEditing={this.state.isEditing}
                updateTask={this.updateTask} />
            : null
        }
      </div>
    );
  }
}

export default App;
