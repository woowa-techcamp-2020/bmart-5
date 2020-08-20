import React from 'react';
import * as S from './styled';
import Icon from '@components/atoms/Icon';
import Logo from '@components/atoms/Logo';
import { HeaderMainType } from '@utils/constants';

type MainType = {
  type: string;
  content?: string;
};

export type Props = {
  left?: string;
  main?: MainType;
  right?: Array<string>;
};

const onClick = () => {
  console.log('hello world');
};

export const Header: React.FC<Props> = ({ left, main, right }) => {
  return (
    <S.Header className="header">
      {left && (
        <div className="left-wrap">
          <Icon icon={left} size={1.5} onClick={onClick} />
        </div>
      )}
      {main && (
        <div className="main-wrap">
          {main.type === HeaderMainType.LOGO ? (
            <Logo alt="logo" src="logo" size={5} />
          ) : main.type === HeaderMainType.SEARCH_BAR ? (
            `--검색 인풋 구현--`
          ) : (
            `${main.content}`
          )}
        </div>
      )}
      {right && (
        <div className="right-wrap">
          {right.map((iconType) => (
            <Icon icon={iconType} size={1.5} onClick={onClick} />
          ))}
        </div>
      )}
    </S.Header>
  );
};
