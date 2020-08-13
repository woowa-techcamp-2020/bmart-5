import styled from 'styled-components';

type ProductProps = {
  width: number;
  height: number;
  src: string;
};

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  & .item-name,
  & .item-price {
    font-size: 1.2rem;
    padding: 0.2rem 0;
  }
  & .item-price {
    font-weight: 600;
  }
  &:first-child {
    margin-left: 1rem;
  }
  &:last-child {
    margin-right: 0rem;
  }
  cursor: pointer;
`;

export const ProductImg = styled.div<ProductProps>`
  display: flex;
  border: 1px solid #ddd;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: url(${(props) => props.src});
  background-position: center;
  background-repeat: none;
  background-size: cover;
  margin-bottom: 1rem;
  & > div {
    margin: auto 0.5rem 0.5rem auto;
  }
  & svg {
    color: red;
  }
`;
