import styled from 'styled-components';

export const GalleryImage = styled.img`
  width: 100%;
  margin-top: 4px;
`;

export const GalleryVideo = styled.video`
  width: 100%;
  margin-top: 4px;
`;

export const Navigation = styled.div`
  user-select: none;
  margin-top: 24px;
`;

export const NavigationButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 2px solid ${(props) => props.theme.color_primary_100};
  }

  &:disabled {
    svg {
      fill: ${(props) => props.theme.color_primary_400};
    }
  }

  svg {
    fill: ${(props) => props.theme.color_primary_100};
  }
`;

export const GoBackButton = styled(NavigationButton)``;

export const GoForwardButton = styled(NavigationButton)``;
