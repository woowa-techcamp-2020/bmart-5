import React from 'react';
import * as S from './styled';
import Icon from '@components/atoms/Icon';
import Logo from '@components/atoms/Logo';
import { IconType } from '@utils/constants';

type Props = {
  left?: string;
  main?: string;
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
          <Icon icon={left} size={1.1} onClick={onClick} />
        </div>
      )}
      {main && (
        <div className="main-wrap">
          {main === 'Logo' ? <Logo alt="logo" src="logo" size={4} /> : `${main}`}
        </div>
      )}
      {right && (
        <div className="right-wrap">
          {right.map((iconType) => (
            <Icon icon={iconType} size={1.1} onClick={onClick} />
          ))}
        </div>
      )}
    </S.Header>
  );
};
