import styled from 'styled-components';

export const SubButton = styled.button<{}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
  outline: 0;
  & > i {
    transform: translate(0%, -10%);
  }
`;
