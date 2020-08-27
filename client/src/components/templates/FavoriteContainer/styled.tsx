import styled from 'styled-components';

export const FavoriteContainer = styled.div<{}>`
  background-color: white;
  padding: 1rem;
  flex-grow: 1;
`;

export const Contents = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: flex-start;
  column-gap: 1rem;
`;

export const Counter = styled.div`
  background: #fff;
  margin-top: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #dfdfdf;
  color: #afafaf;
  font-size: 1.5rem;
`;
