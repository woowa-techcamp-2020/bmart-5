import styled from 'styled-components';

export const Icon = styled.i<{ size: number }>`
  display: flex;
  width: ${(props) => props.size}rem;
  box-sizing: border-box;
  cursor: pointer;
  & > svg {
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
`;
