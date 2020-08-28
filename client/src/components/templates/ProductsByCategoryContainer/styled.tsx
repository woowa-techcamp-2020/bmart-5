import styled from 'styled-components';

export const ProductsByCategoryContainer = styled.div`
  width: 100%;
  background-color: white;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 5px;
  box-sizing: border-box;
  padding: 0 1rem;

  & .wrapper {
    padding: 0 1rem;
  }
  & .content {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: flex-start;
    column-gap: 1rem;
    & .main {
      /* padding: 1rem; */
    }
  }
`;
