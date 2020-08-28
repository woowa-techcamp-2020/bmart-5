import styled from 'styled-components';

export const SlidableContainer = styled.div`
  background-color: white;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 5px;
  padding: 0 1rem;

  & .content {
    display: -webkit-box;
    width: 100%;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &::after {
      content: '';
      margin-right: 1rem;
    }
  }
`;
