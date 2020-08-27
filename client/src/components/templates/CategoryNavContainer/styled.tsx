import styled from 'styled-components';

export const CategoryNavContainer = styled.div<{}>`
  background: #fff;
  margin: 1rem 0;
  flex-grow: 1;
`;

export const NavContainer = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  ${(props) =>
    props.length % 2 !== 0 &&
    `&:last-child::after {
    content: ' ';
    text-align: center;
    border-left: 1px solid #dfdfdf;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    padding: 1rem;
    font-size: 2rem;
  }`}
`;

export const Category = styled.div<{}>`
  text-align: center;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;
  &:nth-child(odd) {
    border-right: 1px solid #dfdfdf;
  }
  &:nth-child(even) {
    border-left: 1px solid #dfdfdf;
  }
`;
