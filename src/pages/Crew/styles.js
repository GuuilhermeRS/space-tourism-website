import styled from 'styled-components';

import { colors } from '../../styles/global';

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-top: 44px;

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
    margin-top: 120px;
    margin-left: 24px;
    margin-bottom: 96px;
    opacity: .17;
    cursor: pointer;
  }

  .active {
    opacity: 1;
  }
`;
