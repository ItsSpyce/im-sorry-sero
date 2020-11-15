import styled from 'styled-components';

export const StyledApp = styled.div`
  position: relative;
  overflow-x: hidden;
  text-align: center;
  background-color: ${(props) => props.theme.color_background};
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: ${(props) => props.theme.color_primary_100};
  font-weight: 400;
  font-family: ${(props) => props.theme.font_content};

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3 {
    font-family: ${(props) => props.theme.font_header};
  }
`;

export const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const SHAPE_SIZE = '300px';

export const BackgroundBlackSquare = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: ${SHAPE_SIZE};
  width: 100vw;
  background-color: ${(props) => props.theme.color_background_300};
`;

export const BackgroundBlackAngle = styled.div`
  position: absolute;
  z-index: -1;
  top: ${SHAPE_SIZE};
  left: 0;
  width: 0;
  height: 0;
  border-top: 200px solid ${(props) => props.theme.color_background_300};
  border-left: 100vw solid transparent;
`;

export const Body = styled.div`
  margin: 100px 50px;
  display: flex;
  flex-direction: column;

  & > * {
    flex: 1 0 auto;
  }
`;

export const theme = {
  color_background_100: '#151a30',
  color_background_200: '#1a2138',
  color_background_300: '#333333',
  color_primary_100: '#FDEBEB',
  color_primary_200: '#FCD7D9',
  color_primary_300: '#F7C1CA',
  color_primary_400: '#F0AEBF',
  color_primary_500: '#E792B1',
  color_primary_600: '#C66A95',
  color_primary_700: '#A6497D',
  color_primary_800: '#852E68',
  color_primary_900: '#6E1C5B',
  color_primary_transparent_100: 'rgba(231, 146, 177, 0.08)',
  color_primary_transparent_200: 'rgba(231, 146, 177, 0.16)',
  color_primary_transparent_300: 'rgba(231, 146, 177, 0.24)',
  color_primary_transparent_400: 'rgba(231, 146, 177, 0.32)',
  color_primary_transparent_500: 'rgba(231, 146, 177, 0.4)',
  color_primary_transparent_600: 'rgba(231, 146, 177, 0.48)',
  color_success_100: '#F4FDDC',
  color_success_200: '#E8FBBA',
  color_success_300: '#D4F496',
  color_success_400: '#BEEA79',
  color_success_500: '#A0DD4F',
  color_success_600: '#7FBE39',
  color_success_700: '#619F27',
  color_success_800: '#468019',
  color_success_900: '#336A0F',
  color_success_transparent_100: 'rgba(160, 221, 79, 0.08)',
  color_success_transparent_200: 'rgba(160, 221, 79, 0.16)',
  color_success_transparent_300: 'rgba(160, 221, 79, 0.24)',
  color_success_transparent_400: 'rgba(160, 221, 79, 0.32)',
  color_success_transparent_500: 'rgba(160, 221, 79, 0.4)',
  color_success_transparent_600: 'rgba(160, 221, 79, 0.48)',
  color_info_100: '#CFF0FF',
  color_info_200: '#9FDDFF',
  color_info_300: '#70C5FF',
  color_info_400: '#4CAEFF',
  color_info_500: '#1188FF',
  color_info_600: '#0C69DB',
  color_info_700: '#084EB7',
  color_info_800: '#053793',
  color_info_900: '#03277A',
  color_info_transparent_100: 'rgba(17, 136, 255, 0.08)',
  color_info_transparent_200: 'rgba(17, 136, 255, 0.16)',
  color_info_transparent_300: 'rgba(17, 136, 255, 0.24)',
  color_info_transparent_400: 'rgba(17, 136, 255, 0.32)',
  color_info_transparent_500: 'rgba(17, 136, 255, 0.4)',
  color_info_transparent_600: 'rgba(17, 136, 255, 0.48)',
  color_warning_100: '#FFFACC',
  color_warning_200: '#FFF499',
  color_warning_300: '#FFEC66',
  color_warning_400: '#FFE43F',
  color_warning_500: '#FFD800',
  color_warning_600: '#DBB600',
  color_warning_700: '#B79500',
  color_warning_800: '#937600',
  color_warning_900: '#7A5F00',
  color_warning_transparent_100: 'rgba(255, 216, 0, 0.08)',
  color_warning_transparent_200: 'rgba(255, 216, 0, 0.16)',
  color_warning_transparent_300: 'rgba(255, 216, 0, 0.24)',
  color_warning_transparent_400: 'rgba(255, 216, 0, 0.32)',
  color_warning_transparent_500: 'rgba(255, 216, 0, 0.4)',
  color_warning_transparent_600: 'rgba(255, 216, 0, 0.48)',
  color_danger_100: '#FFF1E3',
  color_danger_200: '#FFDEC7',
  color_danger_300: '#FFC8AC',
  color_danger_400: '#FFB397',
  color_danger_500: '#FF9075',
  color_danger_600: '#DB6555',
  color_danger_700: '#B7403A',
  color_danger_800: '#932528',
  color_danger_900: '#7A1620',
  color_danger_transparent_100: 'rgba(255, 144, 117, 0.08)',
  color_danger_transparent_200: 'rgba(255, 144, 117, 0.16)',
  color_danger_transparent_300: 'rgba(255, 144, 117, 0.24)',
  color_danger_transparent_400: 'rgba(255, 144, 117, 0.32)',
  color_danger_transparent_500: 'rgba(255, 144, 117, 0.4)',
  color_danger_transparent_600: 'rgba(255, 144, 117, 0.48)',
  breakpoint_mobile: '688px',
  breakpoint_tablet: '992px',
  breakpoint_desktop: '1312px',
  size_1: '4px',
  size_2: '8px',
  size_3: '12px',
  size_4: '16px',
  size_5: '20px',
  size_6: '24px',
  size_7: '28px',
  size_8: '32px',
  size_9: '36px',
  size_10: '40px',
  font_content: "'Roboto', sans-serif",
  font_header: "'Nunito', sans-serif",
};
