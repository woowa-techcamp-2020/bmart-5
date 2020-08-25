import styled from 'styled-components';

export const SlidableCategoryContainer = styled.div`
  width: 100%;
  background-color: white;
  margin-bottom: 3px;

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
