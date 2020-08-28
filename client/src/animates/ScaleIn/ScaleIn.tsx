import { ReactNode } from 'react';
import * as S from './styled';

type Props = {
  children: ReactNode;
};

export const ScaleIn = ({ children }: Props) => {
  return <S.div>{children}</S.div>;
};
