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

  @media (max-width: 768px) and (min-width: 376px) {
    width: 100%;
    height: 100%;

    h5 {
      margin-left: 40px;
      margin-top: 40px;
    }
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 100%;
    align-items: center;

    margin-top: 24px;
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

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 768px) and (min-width: 376px) {
    flex-direction: column;

    .info {
      order: 3;
      text-align: center;
    }

    picture {
      order: 1;
      margin-top: 60px;

      source, img {
        max-width: 100%;
        max-height: 310px;
      }
    }

  }

  @media (max-width: 375px) {
    flex-direction: column;

    .info {
      order: 3;
      text-align: center;

      h3 {
        margin: 8px 0 16px;
      }
    }

    picture {
      order: 1;
      margin-top: 32px;

      source, img {
        max-width: 100%;

      }
    }

    nav {
      order: 2;
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

  @media (max-width: 768px) and (min-width: 376px) {
    flex-direction: row;
    margin: 56px 0 40px;
    order: 2;

    button {
      margin: 0 8px;
    }
  }

  @media (max-width: 375px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;

    button {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }
  }
`;
