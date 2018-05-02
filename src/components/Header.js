import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import DialogForm from './DialogForm';

class Header extends Component {
  state = {
    dialogOpen: false,
  };

  handleClickOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    return (
      <AppBar className="header" position="static">
        <Toolbar className="flex-row container">
          <Typography variant="title" color="inherit">
            ToDo List
          </Typography>
          <Button
            onClick={this.handleClickOpen}
            color="inherit">
            Add new ToDo
          </Button>
          <DialogForm dialogOpen={this.state.dialogOpen} dialogCLose={this.handleClose} addToDo={this.props.addToDo} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
