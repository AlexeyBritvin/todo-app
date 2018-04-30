import React, { Component } from 'react';

class ToDoForm extends Component {
  todoName = React.createRef();
  todoForm = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    this.props.addToDo(this.todoName.current.value);
    this.todoForm.current.reset();
  };

  render() {
    return (
      <form className="add-todo" onSubmit={this.onSubmit} ref={this.todoForm} >
        <input ref={this.todoName} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ToDoForm;
