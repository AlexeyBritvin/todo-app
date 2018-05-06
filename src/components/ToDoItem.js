import React, { Component } from 'react';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

class TodoItem extends Component {
  handleEditClick = () => {
    this.props.openTodoForm({ todo: this.props.todo, index: this.props.index, isEditing: true });
  }

  render() {
    return (
      <ListItem
        key={this.props.index}
        button
        onClick={() => this.props.completeTask(this.props.index)}>
        <Checkbox
          tabIndex={-1}
          disableRipple
          checked={this.props.todo.complete}
        />
        <ListItemText
          primary={this.props.todo.title}
          secondary={this.props.todo.date ? this.props.todo.date : this.props.todo.description}>
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="edit" onClick={this.handleEditClick} >
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
