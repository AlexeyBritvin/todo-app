import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';

class Header extends Component {
  state = {
    anchorEl: null
  }

  handleMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleAddTodoClick = () => {
    this.props.openTodoForm({ todo: null, isEditing: false });
  }

  menuItemHandleClick = event => {
    this.props.setFilterCase(event.currentTarget.textContent);
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <AppBar className="header" position="static">
        <Toolbar className="flex-row container">
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={this.handleMenuClick}
            ref={this.menuButtonRef}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.menuItemHandleClick}>All</MenuItem>
            <MenuItem onClick={this.menuItemHandleClick}>Usual</MenuItem>
            <MenuItem onClick={this.menuItemHandleClick}>Important</MenuItem>
            <MenuItem onClick={this.menuItemHandleClick}>The Most Important</MenuItem>
          </Menu>
          <Typography variant="headline" color="inherit" classes={{headline: 'todo-title'}}>
            ToDo List
          </Typography>
          <Button
            onClick={this.handleAddTodoClick}
            color="inherit"
            classes={{root: 'add-todo'}}>
            Add new ToDo
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
