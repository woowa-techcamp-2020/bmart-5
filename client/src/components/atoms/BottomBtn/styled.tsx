import styled from 'styled-components';

export const BottomBtn = styled.button<{ tag?: string }>`
  position: relative;
  background: rgb(120, 196, 192);
  margin: 2rem 1rem 1rem 1rem;
  padding: 1rem;
  border-radius: 0.3rem;
  color: #fff;
  font-weight: 600;
  border: none;
  font-size: 2.5rem;
  ${({ tag }) => tag && `& .price-tag {position: absolute; right: 1rem;`}
`;
