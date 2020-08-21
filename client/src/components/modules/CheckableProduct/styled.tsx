import styled from 'styled-components';
export { Label, Input, Span } from '../CheckListHeader/styled';

export const CheckableProduct = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductInfo = styled.div`
  font-size: 1rem;
`;

export const InfoTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 10px 16px;
`;

export const InfoNameRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 16px;
`;

export const ChkBoxSection = styled.span``;

export const InfoProductGrid = styled.div`
  display: grid;
  grid-template-columns: 33% auto;
  margin: 5px 16px 16px 16px;
`;

export const ProductImg = styled.img`
  border: 1px solid #ddd;
  width: 100%;
  height: auto;
`;

export const PriceAndCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 10px;
`;

export const GrayPrice = styled.div`
  color: gray;
  margin-bottom: 3px;
`;

export const RawPriceSpan = styled.span`
  color: lightgray;
  text-decoration: line-through;
  margin-right: 5px;
`;

export const PriceSpan = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const CounterSactor = styled.div`
  margin: auto auto 0 0;
`;
