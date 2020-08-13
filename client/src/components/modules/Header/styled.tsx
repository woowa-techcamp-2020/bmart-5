import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  min-height: 24px;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  & > div.logo-wrap {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > div.wrap {
    display: flex;
    justify-content: space-between;
    & > :first-child {
      margin-right: 1rem;
    }
  }
`;
