import styled from 'styled-components';

export const Header = styled.h1`
  color: ${(props) => props.theme[props.color || 'color_primary_100']};
`;

export const SubHeader = styled.h3`
  color: ${(props) => props.theme[props.color || 'color_primary_300']};
`;
