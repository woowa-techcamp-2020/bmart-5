import { MouseEvent } from 'react';
import styled from 'styled-components';

type Props = {
  size: number;
  onClick: (e: MouseEvent) => void;
};

export const Icon = styled.i<Props>`
  display: flex;
  width: ${(props) => props.size}rem;
  box-sizing: border-box;
  & > svg {
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  cursor: pointer;
`;
