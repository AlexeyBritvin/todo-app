import React, { Component } from 'react';
import List from 'material-ui/List';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    return (
      <div className="container">
        <List>
          {
            this.props.todos.map((todo, index) => {
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
