import styled from 'styled-components';

import { colors } from '../../styles/global';

export const Section = styled.section`
  min-height: calc(100vh - (96px + 40px));

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;

  h5 {
    margin-left: 60px;
  }
`;

export const Planet = styled.div`
  display: flex;
  width: 100%;

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
  }

  button:hover {
    background: ${colors.primary};
    cursor: pointer;
  }

  .active::after {
    content: '';
    width: calc(100% - 30px);
    height: 3px;
    background: ${colors.light};
    opacity: .6;

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
