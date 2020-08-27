import styled from 'styled-components';

export const SubCategoryNavContainer = styled.div<{}>`
  background: #fff;
  margin: 1rem 0;

  & .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
  }
`;

export const SubCategory = styled.div<{}>`
  text-align: center;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;
  &:nth-child(odd) {
    border-right: 1px solid #efefef;
  }
  &:nth-child(even) {
    border-left: 1px solid #efefef;
  }
`;
