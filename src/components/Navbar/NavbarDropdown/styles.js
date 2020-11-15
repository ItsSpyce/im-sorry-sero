import styled from 'styled-components';

export const StyledDropdown = styled.ul`
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.color_primary_500};
  top: 24px;
  list-style: none;
  padding: 0;
  z-index: 9999;
`;

export const DropdownItem = styled.li`
  height: 42px;
  align-content: center;
`;
