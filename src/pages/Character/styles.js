import styled from 'styled-components';

export const Avatar = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

export const Card = styled.div`
  border-radius: ${(props) => props.theme.size_2};
  margin: ${(props) => props.theme.size_10} 0;
  padding: ${(props) => props.theme.size_6} ${(props) => props.theme.size_8};
  box-shadow: 4px 8px 15px ${(props) => props.theme.color_background_200};

  @media (min-width: ${(props) => props.theme.breakpoint_tablet}) {
    width: 500px;
    margin: ${(props) => props.theme.size_10} auto;
  }
`;

export const Description = styled(Card)`
  color: ${(props) => props.theme.color_primary_100};
  background-color: ${(props) => props.theme.color_primary_500};
`;

export const Links = styled(Card)`
  background-color: ${(props) => props.theme.color_background_300};
  display: flex;
  justify-content: space-around;
  a {
    color: ${(props) => props.theme.color_primary_100};
    height: calc(24px + 2vmin);
    line-height: calc(24px + 2vmin);
  }

  svg {
    fill: ${(props) => props.theme.color_primary_100};
    width: 32px;
    height: 32px;

    @media (min-width: ${(props) => props.theme.breakpoint_tablet}) {
      width: 42px;
      height: 42px;
    }
  }
`;

export const Images = styled(Card)`
  background-color: ${(props) => props.theme.color_primary_400};
  position: relative;
`;
