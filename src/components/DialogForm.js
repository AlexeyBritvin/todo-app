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


class DialogForm extends Component {
  state = {
    title: '',
    description: '',
    importance: '',
    date: ''
   }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const todo = {...this.state};
    this.props.addToDo(todo);
    this.setState({
      title: '',
      description: '',
      importance: '',
      date: ''
    });
    this.props.dialogCLose();
  };

  render() {
    return (
      <Dialog
          open={this.props.dialogOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Todo</DialogTitle>
          <form action="" className="todo-form" onSubmit={this.onSubmit}>
            <DialogContentText className="todo-form__title">
              Please, enter the title, description and the date
            </DialogContentText>
            <TextField
              className="form-control"
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              onChange={this.handleChange('title')}
            />
            <TextField
              className="form-control"
              margin="dense"
              id="name"
              label="Description"
              type="text"
              fullWidth
              onChange={this.handleChange('description')}
            />
            <FormControl margin="dense" className="form-control">
              <InputLabel htmlFor="importance">Importance</InputLabel>
              <Select
                native
                value={this.state.importance}
                onChange={this.handleChange('importance')}
                inputProps={{id: 'importance'}}
              >
                <option value=""></option>
                <option value="Usual">Usual</option>
                <option value="High priority">High priority</option>
                <option value="The highest priority">The highest priority</option>
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
              onChange={this.handleChange('date')}
            />
            <DialogActions>
              <Button onClick={this.props.dialogCLose} color="primary" type="button">
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Create
              </Button>
            </DialogActions>
          </form>
        </Dialog>
    );
  }
}

export default DialogForm;
