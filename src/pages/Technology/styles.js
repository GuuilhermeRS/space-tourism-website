import styled from 'styled-components';
import { colors, fonts } from '../../styles/global';

export const Section = styled.section`
  margin-top: 76px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  min-height: calc(100vh - (136px + 76px));
  margin-left: 165px;

  strong {
    opacity: .25;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h6 {
    margin-bottom: 8px;
    font-size: 16px;
  }

  .tech {
    display: flex;
    justify-content: space-between;
    width: 1400px;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  button {
    width: 80px;
    height: 80px;
    margin: 16px 0;
    cursor: pointer;

    border: solid #fff 1px;
    border-radius: 50%;
    background: transparent;

    color: #fff;
    font-size: 32px;
    font-family: ${fonts.serif};
  }

  .active {
    background: #fff;
    color: ${colors.dark};
  }
`;
