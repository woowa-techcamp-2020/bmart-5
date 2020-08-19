import styled from 'styled-components';

export const TabViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  & .content {
    padding: 0 1rem;
  }
  & .images-container {
    display: flex;
    justify-content: space-between;
    & .image-container {
      margin-right: 1%;
      &:last-child {
        margin-right: 0;
      }
    }
    & img {
      width: 100%;
      height: auto;
    }
  }
`;
