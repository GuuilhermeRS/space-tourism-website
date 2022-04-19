import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 40px;
  height: 96px;


  img {
    margin-left: 55px;
  }

  div::before {
    content: '';
    width: calc(100vw - 830px);
    height: 1px;
    background: #fff;

    display: block;
    position: relative;
    right: -95px;
  }
`;
