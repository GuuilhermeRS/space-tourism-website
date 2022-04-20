import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  light: '#FFF',
  dark: '#0B0D17',
  primary: '#D0D6F9',
};

export const fonts = {
  serif: '\'Bellefair\', serif',
  sansSerif: '\'Barlow Condensed\', sans-serif',
};

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${colors.primary} no-repeat fixed;
    background-image: url(${(props) => props.background.desktop});
    background-size: cover;

    font-family: ${fonts.sansSerif};
    font-weight: 400;
    color: ${colors.light};
  }

  @media (max-width: 768px) and (min-width: 376px) {
    body {
      background-image: url(${(props) => props.background.tablet});
    }
  }
`;

export const Heading1 = styled.h1`
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: 150px;

  text-transform: uppercase;
`;

export const Heading2 = styled.h2`
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: 100px;

  text-transform: uppercase;

  @media (max-width: 768px) and (min-width: 376px) {
    font-size: 80px;
    text-align: center;
  }
`;

export const Heading3 = styled.h3`
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: 56px;

  text-transform: uppercase;
`;

export const Heading4 = styled.h4`
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: 32px;

  text-transform: uppercase;
`;

export const Heading5 = styled.h5`
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 4.75px;
  text-transform: uppercase;

  @media (max-width: 768px) and (min-width: 376px) {
    font-size: 20px;
  }
`;

export const Subheading1 = styled.h6`
  font-weight: 400;
  font-size: 28px;
  text-transform: uppercase;
`;

export const Subheading2 = styled.h6`
  font-weight: 400;
  font-size: 14px;
  color: ${colors.primary};

  text-transform: uppercase;
  letter-spacing: 2.35px;
`;
export const Bodytext = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  max-width: 450px;
  color: ${colors.primary};

  @media (max-width: 768px) and (min-width: 376px) {
    max-width: 552px;
    text-align: center;
  }
`;
