import React, { ReactNode } from 'react';
import * as S from './styled';

export type Props = {
  children?: ReactNode;
};

export const Content = ({ children }: Props) => <S.Content>{children}</S.Content>;
