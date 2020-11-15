import styled from 'styled-components';

export const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.color_primary_500};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  display: block;
  padding: ${(props) => props.theme.size_2};
  font-family: ${(props) => props.theme.font_header};

  a {
    color: ${(props) => props.theme.color_primary_100};
  }
`;

export const NavbarLogo = styled.img`
  height: 40px;
  width: 40px;
  float: left;
  filter: brightness(100);
  transform: rotateZ(45deg);

  @media (min-width: ${(props) => props.theme.breakpoint_tablet}) {
    margin-left: ${(props) => props.theme.size_4};
  }
`;

export const FlyoutButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  float: right;
  margin-right: ${(props) => props.theme.size_4};
  cursor: pointer;
  transition: all 150ms ease-out;
  ${(props) => props.isFlyoutOpen && 'transform: rotateZ(180deg);'}
  position: absolute;
  top: ${(props) => (props.isFlyoutOpen ? '12px' : '16px')};
  right: 0;

  &:focus {
    outline: 2px solid ${(props) => props.theme.color_primary_100};
  }

  svg {
    width: 32px;
    height: 32px;
    fill: ${(props) => props.theme.color_primary_100};
  }

  @media (min-width: ${(props) => props.theme.breakpoint_tablet}) {
    display: none;
  }
`;

export const NavItemsContainer = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  top: 46px;
  left: 0;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;

  @media (min-width: ${(props) => props.theme.breakpoint_tablet}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  background-color: ${(props) => props.theme.color_primary_500};
  display: block;
  height: 48px;
  opacity: 0;
  line-height: 40px;
  animation: show_nav_item 150ms ease-out
    ${(props) => props.animationKey * 100}ms forwards;

  @keyframes show_nav_item {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const NavItemsRight = styled.div`
  position: relative;
  display: none;
  float: right;
  flex-direction: row;
  font-size: 24px;

  @media (min-width: ${(props) => props.theme.breakpoint_tablet}) {
    display: flexbox;
    width: 400px;
    justify-content: space-between;
    margin-right: ${(props) => props.theme.size_10};
  }
`;

export const NavItemRight = styled.div`
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  height: 100%;
  width: 150px;
  margin-top: ${(props) => props.theme.size_2};
  color: ${(props) => props.theme.color_primary_100};
  user-select: none;
`;
