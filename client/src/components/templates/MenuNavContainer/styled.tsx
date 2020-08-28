import styled from 'styled-components';

export const MenuNavContainer = styled.div<{}>`
  background: #fff;
`;

export const HomeNav = styled.div<{}>`
  font-size: 2rem;
  & span {
    font-weight: 600;
  }
  padding: 1rem;
`;

export const TwoRowNav = styled.div`
  display: flex;
  border: 2px solid #dfdfdf;
  border-radius: 0.3rem;
  margin: 2rem 2rem 0 2rem;
  padding-bottom: 1rem;
  justify-content: space-evenly;
`;

export const LinkBox = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
`;
