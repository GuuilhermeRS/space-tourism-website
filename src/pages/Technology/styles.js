import styled from 'styled-components';
import { colors, fonts } from '../../styles/global';

export const Section = styled.section`
  width: 1400px;
  height: calc(100vh - 212px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

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
  margin-right: 80px;

  button {
    width: 80px;
    height: 80px;
    margin: 16px 0;

    border: solid rgba(255, 255, 255, .2) 1px;

    border-radius: 50%;
    background: transparent;

    color: ${colors.light};
    font-size: 32px;
    font-family: ${fonts.serif};

    &:hover {
      border: solid ${colors.light} 1px;
      cursor: pointer;
    }
  }


  .active {
    background: ${colors.light};
    border: ${colors.light};
    color: ${colors.dark};
  }
`;
