import styled from 'styled-components';

type CategoryProps = {
  width: number;
  height: number;
  src: string;
};

type IconContainerProps = {
  width: number;
  height: number;
};

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
`;

export const CategoryImg = styled.div<CategoryProps>`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  background: url(${(props) => props.src});
  background-size: cover;
  cursor: pointer;
`;
