import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  max-width: 48rem;
  width: 100%;
  z-index: 10;
  display: flex;
  min-height: 4rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  background-color: white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);

  & > div.left-wrap {
    display: flex;
    justify-content: space-between;
    margin-left: 2rem;
  }
  & > div.main-wrap {
    display: flex;
    position: absolute;
    font-weight: bold;
    font-size: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > div.right-wrap {
    display: flex;
    justify-content: space-between;
    & > :last-child {
      margin-right: 2rem;
    }
  }
`;
