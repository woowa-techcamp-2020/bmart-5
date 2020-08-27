import styled from 'styled-components';

export const MenuNavContainer = styled.div<{}>`
  background: #fff;
`;

export const HomeNav = styled.div<{}>`
  font-size: 2rem;
  & span {
    font-weight: 600;
  }
  margin: 2rem;
`;

export const TwoRowNav = styled.div`
  display: flex;
  border: 2px solid #efefef;
  border-radius: 0.3rem;
  margin: 2rem;
  justify-content: space-evenly;
`;

export const LinkBox = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
`;
