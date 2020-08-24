import React, { ChangeEvent } from 'react';
import * as S from './styled';

type Props = {
  htmlFor: string;
  value: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent) => void;
};

export const Input: React.FC<Props> = ({ htmlFor, value, type, name, placeholder, onChange }) => {
  return (
    <>
      <S.Label htmlFor={htmlFor}>{value}</S.Label>
      <S.Input type={type} name={name} placeholder={placeholder} onChange={onChange} />
    </>
  );
};
