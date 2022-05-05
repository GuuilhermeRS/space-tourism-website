import styled from 'styled-components';

import { colors } from '../../styles/global';

export const Navbar = styled.nav`
  background: rgba(151, 151, 151, .05);
  backdrop-filter: blur(30px);

  width: 830px;
  height: 96px;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${colors.light};
    font-size: 16px;

    text-decoration: none;
    text-transform: uppercase;

    padding: 5px 10px;
    margin: 0 20px;

    span {
      font-weight: bold;
      margin-right: 5px
    }
  }

  .active::after{
    content: '';
    width: 100%;
    height: 3px;
    background: ${colors.light};

    display: block;
    position: relative;
    bottom: -35px;
  }

  a:hover::after {
    content: '';
    width: 100%;
    height: 3px;
    background: ${colors.light};
    opacity: .5;

    display: block;
    position: relative;
    bottom: -35px;
  }

  @media (max-width: 768px) and (min-width: 376px) {
    width: 450px;
    justify-content: space-evenly;

    a {
      font-size: 14px;
      margin: 0;

      span {
        display: none;
      }
    }
  }

  @media (max-width: 375px) {
    a + a {
      display: none;
    }
  }
`;
