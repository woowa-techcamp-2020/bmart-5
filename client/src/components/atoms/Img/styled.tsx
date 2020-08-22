import styled from 'styled-components';

export const Img = styled.img<{ size: number }>`
  display: inline-block;
  width: ${(props) => props.size}rem;
  box-sizing: border-box;
`;
