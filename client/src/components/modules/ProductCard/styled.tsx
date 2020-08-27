import styled from 'styled-components';

export const ProductCard = styled.div`
  /* common */
  display: flex;
  flex-direction: column;
  color: black;
  cursor: pointer;
  & .image-container {
    position: relative;
  }
  & .sale-badge {
    position: absolute;
    top: 6%;
    left: 5%;
  }
  & .like-icon {
    position: absolute;
    bottom: 6%;
    right: 5%;
    & svg {
      color: red;
    }
  }

  /* slide */
  &.slide {
    width: 16rem;
    margin-right: 1rem;
    margin-bottom: 2rem;
    &:first-child {
      margin-left: 1rem;
    }
    &:last-child {
      margin-right: 0rem;
    }
  }

  /* sale */
  &.sale {
    margin-bottom: 3rem;
    & .image-container {
      overflow: hidden;
      width: 100%;
      position: relative;
      padding-top: 75%;
    }
    & img {
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100%;
      height: auto;
      transform: translate(0, -12.5%);
    }
  }

  /* grid */
  &.grid {
    margin-bottom: 4rem;
  }

  /* main */
  &.main {
    margin-bottom: 4rem;
  }
`;

export const ProductImg = styled.img`
  border: 1px solid #ddd;
  width: 100%;
  height: auto;
`;

export const ProductInfo = styled.div`
  margin-top: 1em;
  font-weight: 500;

  &.slide {
    font-size: 1.6rem;
  }
  &.sale {
    font-size: 2rem;
  }
  &.grid {
    font-size: 1.6rem;
  }
  &.main {
    font-size: 1.9rem;
  }

  & .item-name {
    overflow: hidden;
    margin-bottom: 6px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

export const ProductPriceRow = styled.div`
  position: relative;
  & .sale-rate {
    font-size: 1em;
    font-weight: 700;
    color: red;
    margin-right: 1rem;
  }
  & .raw-price {
    font-size: 1em;
    color: lightgray;
    text-decoration: line-through;
    margin-right: 1rem;
  }
  & .price {
    font-size: 1.2em;
    color: black;
    font-weight: 700;
  }
  & i {
    position: absolute;
    top: -1rem;
    right: 1.5rem;
  }
`;
