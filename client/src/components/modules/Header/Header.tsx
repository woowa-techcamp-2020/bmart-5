import React from 'react';
import Router from 'next/router';
import * as S from './styled';
import Icon from '@components/atoms/Icon';
import Logo from '@components/atoms/Logo';
import { HeaderMainType, IconType } from '@utils/constants';

export type MainType = {
  type: HeaderMainType;
  content?: string;
};

export type RightBtnType = {
  type: string;
  onClick?: (e: MouseEvent) => void;
};

export type Props = {
  left?: IconType;
  main?: MainType;
  right?: Array<RightBtnType>;
};

export const Header: React.FC<Props> = (props) => {
  return (
    <S.Header className="header">
      <div className="left-wrap">
        {props.left && <Icon icon={props.left} size={2.2} onClick={() => Router.back()} />}
      </div>
      <div className="main-wrap">
        {props.main && (
          <>
            {props.main.type === HeaderMainType.LOGO ? (
              <Logo alt="logo" src="logo" size={8} />
            ) : props.main.type === HeaderMainType.SEARCH_BAR ? (
              `--검색 인풋 구현--`
            ) : (
              `${props.main.content}`
            )}
          </>
        )}
      </div>
      <div className="right-wrap">
        {props.right && (
          <>
            {props.right.map((iconType) => (
              <Icon icon={iconType.type} size={2.2} onClick={iconType.onClick} />
            ))}
          </>
        )}
      </div>
    </S.Header>
  );
};
