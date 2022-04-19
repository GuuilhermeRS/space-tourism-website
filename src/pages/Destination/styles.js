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
`;

export const PlanetList = styled.ul`
  display: flex;

  list-style: none;

  margin-bottom: 50px;

  button {
    color: ${colors.light};
    font-size: 16px;
    background:transparent;
    border: none;

    text-transform: uppercase;

    margin-right: 30px;

    cursor: pointer;

    &:hover::after {
      content: '';
      width: 100%;
      height: 3px;
      background: ${colors.light};
      opacity: .5;

      display: block;
      position: relative;
      bottom: -12px;
    }
  }

  .active:hover::after {
    height: 0;
  }

  .active::after {
    content: '';
    width: calc(100% - 30px);
    height: 3px;
    background: ${colors.light};

    display: block;
    position: relative;
    bottom: -12px;
  }
`;

export const PlanetInfo = styled.div`
  display: flex;

  div {
    margin-right: 80px;
    margin-top: 80px;
  }
`;
