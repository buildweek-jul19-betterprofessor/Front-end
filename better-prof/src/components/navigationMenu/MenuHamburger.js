import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const token = localStorage.getItem('token');

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <NavLink to="/">Home</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/dashboard">My Account</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/register">Register/Login</NavLink>
        </MenuItem>
        {/* If not loged in log out will not display */}
        {token ? <MenuItem onClick={logout}>Logout</MenuItem> : <div />}
      </Menu>
    </div>
  );
}
