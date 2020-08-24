import styled from 'styled-components';

export const TotalPriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  margin 3rem 0;
`;

export const PriceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  margin 0 2rem 2rem 2rem;

  & .raw-price {
    font-weight: 300;
    color: lightgray;
    text-decoration: line-through;
    margin-right: 0.5rem;
  }
`;

export const NoticeRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin 1rem 2rem 3rem 2rem;
`;

export const CautionRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.3rem;
  width: 100%;
  color: #b5b5b5;
  background-color: #f3f3f3;
  padding: 3rem 0 1rem 0;

  & .caution-text{
    margin 0 2rem 0 2rem;
  }
`;

export const SubmitRow = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f3f3f3;
  padding: 0rem 0 3rem 0;
`;
