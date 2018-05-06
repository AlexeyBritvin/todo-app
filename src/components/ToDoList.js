import React, { Component } from 'react';
import List from 'material-ui/List';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    const filterCase = this.props.filterCase;
    const shownTodos = this.props.todos.filter(todo => {
      switch(filterCase) {
        case 'usual':
          return todo.importance === 'usual';
        case 'important':
          return todo.importance === 'high priority';
        case 'the most important':
          return todo.importance === 'the highest priority';
        default:
         return todo;
      }
    });

    return (
      <div className="container">
        <List>
          {
            shownTodos.map((todo, index) => {
              return (
              <ToDoItem
                key={todo.id}
                index={index}
                todo={todo}
                deleteToDo={this.props.deleteToDo}
                completeTask={this.props.completeTask}
                openTodoForm={this.props.openTodoForm} />
              );
            })
          }
        </List>
      </div>
    );
  }
}

export default ToDoList;
