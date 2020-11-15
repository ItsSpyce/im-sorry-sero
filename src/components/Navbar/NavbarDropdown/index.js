import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDropdown, DropdownItem } from './styles';

const NavbarDropdown = ({ x, y, items = [] }) => (
  <StyledDropdown x={x} y={y}>
    {items.map((item, i) => (
      <DropdownItem key={i}>
        {item.href && <Link to={item.href}>{item.text}</Link>}
        {item.onClick && <div onClick={item.onClick}>{item.text}</div>}
      </DropdownItem>
    ))}
  </StyledDropdown>
);

export default NavbarDropdown;
