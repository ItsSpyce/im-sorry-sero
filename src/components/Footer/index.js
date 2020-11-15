import React from 'react';
import { StyledFooter, FooterLink } from './styles';

const Footer = () => (
  <StyledFooter>
    <p>
      Built by{' '}
      <FooterLink
        href="https://twitter.com/ItsSpyce"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spyce
      </FooterLink>
    </p>
  </StyledFooter>
);

export default Footer;
