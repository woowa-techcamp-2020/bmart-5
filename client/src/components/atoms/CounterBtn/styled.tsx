import styled from 'styled-components';

export const CounterBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px solid #dfdfdf;
  border-radius: 1.5rem;
  padding: 0.4rem 0.5rem;

  & .minus-btn,
  & .plus-btn {
    background: none;
    border: none;
    font-weight: 600;
    font-size: 1.5rem;
    outline: none;
  }

  & .number {
    box-sizing: border-box;
    margin: 0 1rem;
    min-width: 2rem;
    text-align: center;
    font-size: 1.2rem;
  }
`;
