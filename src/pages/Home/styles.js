import styled from 'styled-components';

import { colors, fonts } from '../../styles/global';

export const Section = styled.section`
  width: 1400px;
  height: calc(100vh - 212px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    width: 274px;
    height: 274px;
    margin-right: 80px;

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

  a:hover {
    margin-right: 0;
    width: 450px;
    height: 450px;
    background: rgba(255, 255, 255, .30);
    color: ${colors.light};
  }
`;

export const Title = styled.div`
  h1 {
    margin: 24px 0;
  }
`;
