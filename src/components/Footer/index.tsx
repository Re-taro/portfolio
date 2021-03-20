import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link 
          href="https://github.com/Re-taro/" 
          rel="noreferrer noopener" 
          target="_blank"
        >
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://twitter.com/10969_rintaro/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Twitter
        </Styled.Link>
        <Styled.Link 
          href="https:/www.instagram.com/10969_rintaro/" 
          rel="noreferrer noopener" 
          target="_blank"
        >
          Instagram
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
