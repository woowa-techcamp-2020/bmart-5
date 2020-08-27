import styled from 'styled-components';

export const FetchableContainer = styled.div<{}>`
  width: 100%;
  background-color: white;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 5px;

  & .wrapper {
    padding: 0 1rem;
  }
  & .content {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: flex-start;
    column-gap: 1rem;
  }
  & .fetch-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border-top: 1.5px solid #efefef;
    padding: 2rem;
    margin-top: 15px;
    color: black;

    & > * {
      margin-right: 6px;
    }
    & i {
      transform: translate(0%, -10%);
      color: #2cc0bd;
    }
    & .title {
      color: #2cc0bd;
    }
    & .page-count {
      margin-right: 0;
    }
  }
`;
