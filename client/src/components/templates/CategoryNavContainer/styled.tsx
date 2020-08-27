import styled from 'styled-components';

export const CategoryNavContainer = styled.div<{}>`
  background: #fff;
  margin: 1rem 0;
  flex-grow: 1;
`;

export const NavContainer = styled.div<{}>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  & .show {
    display: block;
    background: #dfdfdf;
  }
  & .hide {
    display: none;
  }
`;

export const Category = styled.div<{}>`
  text-align: center;
  border: 1px solid #dfdfdf;
  padding: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  font-weight: 600;
`;

export const SubCategory = styled.div<{}>`
  text-align: center;
  border: 1px solid #dfdfdf;
  padding: 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ##353535;
`;
