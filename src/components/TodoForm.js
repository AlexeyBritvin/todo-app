import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import {getRandom} from '../helpers';


class TodoForm extends Component {
  state = {
    title: '',
    description: '',
    importance: 'usual',
    date: '',
    complete: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.props.todo !== null) {
      const updatedTask = {...this.state};
      this.props.updateTask(updatedTask);
    } else {
      const todo = {...this.state};
      todo.id = getRandom();
      this.props.addToDo(todo);
      this.setState({
        title: '',
        description: '',
        importance: '',
        date: ''
      });
    }
    this.props.dialogCLose();
  };

  componentDidMount() {
    if (this.props.todo !== null) {
      this.setState({...this.props.todo});
    }
  }

  render() {
    const isEditing = this.props.isEditing;

    return (
      <Dialog
          open={this.props.isOpen}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{isEditing? 'Edit' : 'New'} Todo</DialogTitle>
          <form action="" className="todo-form" onSubmit={this.onSubmit}>
            <DialogContentText className="todo-form__title">
              Please,
              {isEditing? ' update ' : ' enter '}
              the title and the date
            </DialogContentText>
            <TextField
              className="form-control"
              value={this.state.title}
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              name="title"
              required
              onChange={this.handleChange}
            />
            <TextField
              className="form-control"
              value={this.state.description}
              margin="dense"
              id="name"
              label="Description"
              type="text"
              fullWidth
              name="description"
              onChange={this.handleChange}
            />
            <FormControl margin="dense" className="form-control">
              <InputLabel htmlFor="importance">Importance</InputLabel>
              <Select
                native
                value={this.state.importance}
                name="importance"
                onChange={this.handleChange}
                inputProps={{id: 'importance'}}>
                <option value="usual"></option>
                <option value="usual">Usual</option>
                <option value="high priority">High priority</option>
                <option value="the highest priority">The highest priority</option>
              </Select>
            </FormControl>
            <TextField
              className="form-control"
              margin="dense"
              id="date"
              label="End time"
              type="date"
              value={this.state.date}
              InputLabelProps={{shrink: true}}
              name="date"
              onChange={this.handleChange}
              required
            />
            <DialogActions>
              <Button onClick={() => this.props.dialogCLose()} color="primary" type="button">
                Cancel
              </Button>
              <Button color="primary" type="submit">
                {isEditing? 'Confirm' : 'Create'}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
    );
  }
}

export default TodoForm;
