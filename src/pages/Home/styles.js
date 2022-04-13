import styled from 'styled-components';

import { colors, fonts } from '../../styles/global';

export const Section = styled.section`
  height: calc(100vh - (96px + 40px));

  display: flex;
  align-items: center;
  justify-content: space-evenly;


  a {
    width: 274px;
    height: 274px;

    border: none;
    border-radius: 50%;

    background: ${colors.light};
    color: ${colors.dark};

    font-family: ${fonts.serif};
    font-size: 32px;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.div`
  h1 {
    margin: 24px 0;
  }
`;
