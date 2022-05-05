import styled from 'styled-components';

import { colors } from '../../styles/global';

export const Section = styled.section`
  width: 1400px;
  height: calc(100vh - 212px);

  display: flex;
  align-items: space-between;
  justify-content: flex-start;
  flex-direction: column;

  strong {
    opacity: .25;
  }

  @media (max-width: 768px) and (min-width: 376px) {
    width: 100%;
    height: calc(100vh - 96px);
    padding: 0 40px;
    align-items: center;

    h5 {
      margin-top: 40px;
      align-self: flex-start;
    }
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 100%;
    padding: 24px;
  }
`;

export const Planet = styled.div`
  display: flex;
  width: 100%;
  margin-top: 64px;

  justify-content: space-evenly;

  p::after {
    content: '';
    width: 100%;
    height: 2px;
    background: ${colors.primary};
    opacity: .6;

    display: block;
    position: relative;
    bottom: -54px;
  }

  @media (max-width: 768px) and (min-width: 376px) {
    flex-direction: column;
    max-width: 576px;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 48px;

    img {
      width: 300px;
      height: 300px;
    }

    p::after {
      bottom: -32px;
    }
  }

  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 170px;
      height: 170px;
    }

    p::after {
      bottom: -32px;
    }
  }
`;

export const PlanetList = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 50px;

  button {
    color: ${colors.primary};
    font-size: 16px;
    background:transparent;
    border: none;

    text-transform: uppercase;

    margin-right: 30px;

    cursor: pointer;

    &:hover::after {
      content: '';
      width: 100%;
      height: 2px;
      background: ${colors.light};
      opacity: .5;

      display: block;
      position: relative;
      bottom: -12px;
    }
  }

  .active {
    button {
      color: ${colors.light};
    }
  }

  .active::after {
    content: '';
    width: calc(100% - 30px);
    height: 2px;
    background: ${colors.light};

    display: block;
    position: relative;
    bottom: -12px;

  }

  @media (max-width: 768px) and (min-width: 376px) {
    display: flex;
    justify-content: center;
    margin-top: 48px;
  }

  @media (max-width: 375px) {
    margin: 24px 0;
    justify-content: center;

    button {
      font-size: 14px;
      margin: 0 8px;

      &:hover::after {
        display: none;
      }
    }

    .active::after {
      width: calc(100% - 16px);
      margin-left: 8px;
    }
  }
`;

export const PlanetInfo = styled.div`
  display: flex;

  div {
    margin-right: 80px;
    margin-top: 80px;
  }

  @media (max-width: 768px) and (min-width: 376px) {
    justify-content: space-around;

    div {
      margin: 48px 0 0 0;
    }
  }

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;

    div {
      margin: 48px 0 0 0;
      text-align: center;
    }

    div + div {
      margin: 24px 0 0 0;
    }
  }
`;
