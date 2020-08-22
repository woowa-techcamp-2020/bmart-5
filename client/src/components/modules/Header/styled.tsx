import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  min-height: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  & > div.left-wrap {
    display: flex;
    justify-content: space-between;
  }
  & > div.main-wrap {
    display: flex;
    position: absolute;
    font-weight: bold;
    font-size: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > div.right-wrap {
    display: flex;
    justify-content: space-between;
    & > :last-child {
      margin-left: 1rem;
    }
  }
`;
