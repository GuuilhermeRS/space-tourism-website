import styled from 'styled-components';

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

  @media (max-width: 768px) and (min-width: 376px) {
    width: 100%;
    height: calc(100vh - 96px);
    padding: 0 40px;
    flex-direction: column;
    align-items: center;

    h5 {
      margin: 40px 0 0;
    }

    .img-container {
      display: flex;
      justify-content: center;
      img {
        max-height: 400px;
      }
    }
  }

  @media (max-width: 375px) {
    max-width: 100%;
    padding: 40px;
    flex-direction: column;
    align-items: center;


    .description {
      display:flex;
      flex-direction: column;

      h5 {
        margin: 0;
        order: 0;
      }


      .img-container {
        display: flex;
        justify-content: center;
        max-height: 224px;
        margin-top: 32px;

        img {
          max-width: 328px;
          max-height: 224px;
          align-items: center;
          justify-content: center;
          order: 1;
        }
      }
    }

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
  }

  @media (max-width: 768px) and (min-width: 376px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      margin-top: 60px;
      margin-bottom: 8px;
    }

    h3 {
      margin-bottom: 16px;
    }

    p {
      max-width: 468px;
      height: 100%;
      font-size: 16px;
    }
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    order: 4;
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

  @media (max-width: 768px) and (min-width: 376px) {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    button {
      margin: 0 12px;
    }
  }

  @media (max-width: 375px) {
    order: 2;
    margin: 32px 0 0;
    display: flex;
    justify-content: center;


    button {
      padding: 8px;
      margin: 0 8px;
      width: 10px;
      height: 10px;
    }
  }
`;
