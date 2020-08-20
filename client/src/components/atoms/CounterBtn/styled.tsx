import styled from 'styled-components';

export const CounterBtn = styled.div`
  border: 2px solid #dfdfdf;
  border-radius: 1rem;
  padding: 0 0.5rem;

  & .minus-btn,
  & .plus-btn {
    background: none;
    border: none;
    font-weight: 600;
    font-size: 1.5rem;
    outline: none;
  }

  & .number {
    margin: 0 2rem;
    font-size: 1.2rem;
  }
`;
