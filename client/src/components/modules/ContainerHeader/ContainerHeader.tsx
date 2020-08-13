import React, { ReactNode } from 'react';
import * as S from './styled';

type Props = {
  children: ReactNode;
};

export const ContainerHeader: React.FC<Props> = ({ children }) => {
  return <S.ContainerHeader>{children}</S.ContainerHeader>;
};
