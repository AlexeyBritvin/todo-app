import React, { Component } from 'react';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

class TodoItem extends Component {
  // state = {...this.props.todo, complete: false}

  handleChange = event => {
    const complete = this.state.complete;
    this.setState({ complete: !complete });
  }

  render() {
    const todo = this.props.todo;
    return (
      <ListItem
        key={this.props.index}
        button
        onClick={() => this.props.completeTask(this.props.index)}
      >
        <Checkbox
          tabIndex={-1}
          disableRipple
          checked={todo.complete}
          onChange={() => this.props.completeTask(this.props.index)}
        />
        <ListItemText primary={todo.title} secondary={todo.description}>
        <span className="todo-item__date">{todo.date}</span>
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="edit">
            <Icon>edit_icon</Icon>
          </IconButton>
          <IconButton aria-label="Delete" onClick={() => this.props.deleteToDo(this.props.index)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default TodoItem;
