import React from 'react';
import { Slide } from 'react-reveal';
import { FaTwitter } from 'react-icons/fa';
import Title from '../../components/Title';
import {
  Hero,
  Header,
  QuoteSection,
  QuotePanel,
  QuoteContent,
  QuoteAuthor,
} from './styles';

const quotes = [
  {
    content: "Dear diary, day 1:\nI'm struggling.\nA lot.",
    author: 'domoarigathanks',
  },
  {
    content:
      "THATS MY WIFE. I am not looking respectfully. It's gonna be nutty nut November I guess?",
    author: 'AriaASMR',
  },
  {
    content: 'sero pretty',
    author: 'Starlightidol',
  },
  {
    content: 'QUEEN POP OFFFFF',
    author: '__XiaoLu',
  },
];

const Home = () => (
  <>
    <Hero>
      <Title
        header="I Only Have Thighs For You&trade;"
        subheader="Thicc thighs save lives"
        subheaderColor="color_primary_200"
      />
    </Hero>
    <Header>Check out what our customers say!</Header>
    <QuoteSection>
      {quotes.map((quote, i) => (
        <Slide left={i % 2 === 0} right={i % 2 === 1} duration={750}>
          <QuotePanel key={i} leanLeft={i % 2 === 0}>
            <QuoteAuthor>
              <FaTwitter />@{quote.author}
            </QuoteAuthor>
            <QuoteContent>{quote.content}</QuoteContent>
          </QuotePanel>
        </Slide>
      ))}
    </QuoteSection>
  </>
);

export default Home;
