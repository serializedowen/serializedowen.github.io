import React from 'react';
// import DropdownMenu from '../DropdownMenu';
import { Menu, MenuItem } from '../DropdownMenu';

export default function AuthenticationMenu() {
  return (
    <Menu>
      <MenuItem>Your account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  );
}
