import React from 'react';
import { Header, SubHeader } from './styles';

const Title = ({ header, subheader, headerColor, subheaderColor }) => (
  <>
    <Header color={headerColor}>{header}</Header>
    <SubHeader color={subheaderColor}>{subheader}</SubHeader>
  </>
);

export default Title;
