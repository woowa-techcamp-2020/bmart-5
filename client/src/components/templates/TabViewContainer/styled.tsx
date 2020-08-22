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
    & img {
      box-sizing: border-box;
      width: 100%;
      border: 2px solid transparent;
      height: auto;
    }
    & .current-tab img {
      border-color: red;
    }
  }
`;

export const ImageContainer = styled.div`
  margin-right: 1%;
  &:last-child {
    margin-right: 0;
  }
`;
