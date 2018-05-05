import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

class Header extends Component {
  handleClick = () => {
    this.props.openTodoForm({ todo: null, isEditing: false })
  }

  render() {
    return (
      <AppBar className="header" position="static">
        <Toolbar className="flex-row container">
          <Typography variant="title" color="inherit">
            ToDo List
          </Typography>
          <Button
            onClick={this.handleClick}
            color="inherit">
            Add new ToDo
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
