import styled from 'styled-components';
export { Label, Input, Span } from '../CheckListHeader/styled';

export const CheckableProduct = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 1rem;
`;

export const InfoNameRow = styled.div`
  display: flex;
  font-size: 2rem;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem 1rem;
`;

export const ChkBoxSection = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 40rem;
  text-overflow: ellipsis;
`;

export const InfoProductGrid = styled.div`
  display: grid;
  grid-template-columns: 33% auto;
  margin: 0.5rem 1rem 1rem 1rem;
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
  margin: 1rem;
  font-size: 2rem;
`;

export const GrayPrice = styled.div`
  color: gray;
  margin-bottom: 0.3rem;
`;

export const RawPriceSpan = styled.span`
  color: lightgray;
  text-decoration: line-through;
  margin-right: 0.5rem;
`;

export const PriceSpan = styled.span`
  font-weight: 600;
  font-size: 2rem;
`;

export const CounterSactor = styled.div`
  margin: auto auto 0 0;
`;
