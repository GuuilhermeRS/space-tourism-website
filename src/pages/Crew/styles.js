import styled from 'styled-components';

import { colors } from '../../styles/global';

export const Section = styled.section`
  width: 1400px;
  height: calc(100vh - 212px);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h5 {
    margin-bottom: 150px;

    strong {
      opacity: .25;
    }
  }

  .description{
    width: 624px;
  }

  .img-container {
    width: 616px;
    height: 712px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const Info = styled.div`
  h4 {
    opacity: .5;
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 30px;
  }

  p {
    height: 160px;
    color: ${colors.primary};
  }
`;

export const Nav = styled.div`
  button {
    width: 15px;
    height: 15px;
    border: none;
    border-radius: 50%;
    margin-top: 64px;
    margin-left: 24px;
    opacity: .17;
    cursor: pointer;

    &:hover {
      opacity: .6;
    }
  }

  .active {
    opacity: 1;
  }
`;
