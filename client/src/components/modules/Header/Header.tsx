import React from 'react';
import * as S from './styled';
import Icon from '../../atoms/Icon';
import Logo from '../../atoms/Logo';
import { IconType } from '../../../utils/constants';

type Props = {
  children: React.FC;
};

const onClick = () => {
  console.log('hello world');
};

export const Header: React.FC = () => {
  return (
    <S.Header className="header">
      <Icon icon={IconType.ARROW_LEFT} size={1.5} onClick={onClick} />
      <div className="logo-wrap">
        <Logo alt="logo" src="logo" size={5} />
      </div>
      <div className="wrap">
        <Icon icon={IconType.SEARCH} size={1.5} onClick={onClick} />
        <Icon icon={IconType.BARS} size={1.5} onClick={onClick} />
      </div>
    </S.Header>
  );
};
