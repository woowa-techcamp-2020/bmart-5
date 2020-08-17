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
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const CategoryImg = styled.div<CategoryProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: url(${(props) => props.src});
  background-size: cover;
  cursor: pointer;
`;
