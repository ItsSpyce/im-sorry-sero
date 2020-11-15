import styled from 'styled-components';

export const StyledFooter = styled.div`
  flex-shrink: 0;
  background-color: ${(props) => props.theme.color_primary_500};
  padding: ${(props) => props.theme.size_1};
  font-size: 20px;
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.color_info_100};
`;
