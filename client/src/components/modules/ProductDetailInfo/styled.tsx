import styled from 'styled-components';

export const ProductDetailInfo = styled.div<{}>`
  .info-row {
    display: flex;
    margin: 1rem;
    font-size: 0.9rem;
    & > div.title {
      width: 5rem;
      font-weight: bold;
    }
    & > div.desc {
      font-size: 0.8rem;
    }
  }
`;
