import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 111%;
  margin-left: -45px;
  margin-bottom: 20px;
  ${(props) =>
    props.fixed &&
    css`
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: -50px;
      margin: 0 auto;
      max-width: 700px;
      padding: 8px;
      position: fixed;
      right: 0;
      top: 0;
      transform: scale(0.5);
      z-index: 1;
      width: 500px;
      height: 110px;
    `}

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  padding: 0 8px;
`;
