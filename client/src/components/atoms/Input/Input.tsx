import React, { ChangeEvent } from 'react';
import * as S from './styled';

type Props = {
  value: string;
  name: string;
  type: string;
  placeholder: string;
  message?: string;
  onChange: (e: ChangeEvent) => void;
};

export const Input: React.FC<Props> = ({ value, type, name, message, placeholder, onChange }) => {
  return (
    <>
      <S.Label htmlFor={name}>{name}</S.Label>
      <S.Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {message && <S.Message>{message}</S.Message>}
    </>
  );
};
