import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import {
  StyledNavbar,
  NavbarLogo,
  FlyoutButton,
  NavItemsContainer,
  NavItem,
  NavItemsRight,
  NavItemRight,
} from './styles';
import CherryBlossom from '../../static/cherry-blossom-flower.png';
import { Link } from 'react-router-dom';
import NavbarDropdown from './NavbarDropdown';

const navItems = [
  {
    text: 'Vtubers',
    subMenu: [{ href: '/serotina', text: 'Serotina' }],
  },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
];

const NavItemCollection = ({ items, setNavItems, hideNavItems }) => (
  <NavItemsContainer>
    {items.map((item, i) => (
      <NavItem
        key={i}
        animationKey={i}
        onClick={() => {
          if (item.subMenu) {
            setNavItems(item.subMenu);
          } else {
            hideNavItems();
          }
        }}
      >
        {item.href && <Link to={item.href}>{item.text}</Link>}
        {!item.href && item.text}
      </NavItem>
    ))}
  </NavItemsContainer>
);

const NavbarItemWithDropdown = ({ item }) => {
  const [isShowingDropdown, setIsShowingDropdown] = useState(false);
  return (
    <NavItemRight
      onFocus={() => setIsShowingDropdown(true)}
      onBlur={() => setIsShowingDropdown(false)}
      onClick={() => setIsShowingDropdown(!isShowingDropdown)}
    >
      {item.href && <Link to={item.href}>{item.text}</Link>}
      {!item.href && item.text}
      {item.subMenu && isShowingDropdown && (
        <NavbarDropdown items={item.subMenu} />
      )}
    </NavItemRight>
  );
};

const Navbar = () => {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const [shownNavItems, setShownNavItems] = useState(navItems);
  function toggleFlyout() {
    if (isFlyoutOpen) {
      setShownNavItems(navItems);
    }
    setIsFlyoutOpen(!isFlyoutOpen);
  }

  return (
    <StyledNavbar>
      <Link to="/">
        <NavbarLogo src={CherryBlossom} />
      </Link>
      {/* Mobile */}
      <FlyoutButton onClick={toggleFlyout} isFlyoutOpen={isFlyoutOpen}>
        <FaAngleLeft height="40px" width="40px" />
      </FlyoutButton>
      {isFlyoutOpen && (
        <NavItemCollection
          items={shownNavItems}
          setNavItems={setShownNavItems}
          hideNavItems={toggleFlyout}
        />
      )}
      {/* Non-mobile */}
      <NavItemsRight>
        {navItems.map((item, i) => (
          <NavbarItemWithDropdown item={item} key={i} />
        ))}
      </NavItemsRight>
    </StyledNavbar>
  );
};

export default Navbar;
