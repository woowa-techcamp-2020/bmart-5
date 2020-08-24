import styled from 'styled-components';
export { Label, Input, Span } from '../CheckListHeader/styled';

export const ProductStateText = styled.div`
  color: black;
  font-weight: 600;
`;

export const OutOfStockProduct = styled.div`
  display: flex;
  flex-direction: column;
  color: lightgray;
`;

export const InfoTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 39rem;
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
  filter: grayscale(100%);
  opacity: 0.8;
`;

export const PriceAndCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  font-size: 2rem;
`;

export const GrayPrice = styled.div`
  margin-bottom: 0.3rem;
`;

export const RawPriceSpan = styled.span`
  text-decoration: line-through;
  margin-right: 0.5rem;
`;

export const PriceSpan = styled.span`
  font-weight: 600;
  font-size: 2rem;
`;
