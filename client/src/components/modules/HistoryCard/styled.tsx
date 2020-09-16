import styled from 'styled-components';

export const HistoryCard = styled.div<{}>`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  background: #fff;
  padding: 1rem;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

export const ProductName = styled.div`
  margin: 1rem;
  font-size: 2rem;
  font-weight: 600;
`;

export const ProductPrice = styled.div`
  margin: 1rem;
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 1rem auto;
  & button {
    background: #fff;
    border: 1px solid #cfcfcf;
    width: 20rem;
    padding: 1.5rem;
    font-size: 1.5rem;
    border-radius: 0.3rem;
  }
  & button:last-child {
    margin-left: 1rem;
  }
`;

export const HistoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  background: #fff;
  padding: 1rem;
`;

export const HistoryDetailRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: 600;

  &.item-name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.item-price {
    display: flex;
    flex-basis: 100px
    width: 100px;
  }
`;
