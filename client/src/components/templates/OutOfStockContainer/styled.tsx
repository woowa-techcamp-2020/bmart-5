import styled from 'styled-components';
import { GrayHorizontal, CheckListContainer } from '../CheckListContainer/styled';

export { GrayHorizontal };

export const OutOfStockContainer = styled(CheckListContainer)``;

export const BackToHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #0787ff;
  padding: 1rem 0 1rem 0;
  border-top: 0.2rem solid #f3f3f3;

  & .moreText {
    margin-left: 0.5rem;
  }
`;
