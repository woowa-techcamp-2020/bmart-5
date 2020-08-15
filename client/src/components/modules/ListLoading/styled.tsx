import styled from 'styled-components';

export const LoadingContainer = styled.div`
  filter: blur(10px);
  -webkit-filter: blur(10px);
  display: -webkit-box;
  width: 100%;
  height: 300px;
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
`;
