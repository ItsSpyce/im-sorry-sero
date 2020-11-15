import styled from 'styled-components';

export const Hero = styled.div`
  background-color: ${(props) => props.theme.color_primary_500};
  margin: 30vh auto 10vh auto;
  border-radius: ${(props) => props.theme.size_2};
  padding: ${(props) => props.theme.size_6} ${(props) => props.theme.size_8};
  box-shadow: 4px 8px 15px ${(props) => props.theme.color_background_200};

  @media (min-width: ${(props) => props.theme.breakpoint_tablet}) {
    width: 500px;
    margin: 30vh auto 15vh auto;
  }
`;

export const Header = styled.h2`
  color: ${(props) => props.theme.color_background_300};
`;

export const QuoteSection = styled.div`
  padding-top: 10vh;
`;

export const QuotePanel = styled.div`
  background-color: ${(props) =>
    props.leanLeft
      ? props.theme.color_background_300
      : props.theme.color_primary_400};
  margin: 0 auto 58px;
  text-align: left;
  padding: ${(props) => props.theme.size_6};
  border-radius: ${(props) => props.theme.size_2};
  box-shadow: 4px 8px 15px rgba(34, 34, 34, 0.4);

  @media (min-width: ${(props) => props.theme.breakpoint_tablet}) {
    width: 80%;
    float: ${(props) => (props.leanLeft ? 'left' : 'right')};
  }
`;

export const QuoteContent = styled.div``;

export const QuoteAuthor = styled.div`
  color: ${(props) => props.theme.color_info_400};
  font-family: ${(props) => props.theme.font_header};
  margin-left: ${(props) => props.theme.size_2};

  svg {
    transform: translate(-4px, 4px);
  }
`;
