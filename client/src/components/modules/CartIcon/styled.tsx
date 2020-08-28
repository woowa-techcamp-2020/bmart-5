import styled from 'styled-components';

export const CartIcon = styled.div<{}>`
  position: relative;
  background-color: #2cc0bd;
  width: 10rem;
  height: 10rem;
  border-radius: 9999px;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  box-shadow: 0 3px 20px -2px;
  display: flex;
  justify-content: center;
  align-items: center;
  & i {
    color: white;
  }
`;

export const Badge = styled.div<{}>`
  position: absolute;
  background-color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(80%, -80%);
  color: #2cc0bd;
  font-size: 1.5rem;
  font-weight: 700;
`;
