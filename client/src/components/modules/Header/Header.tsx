import React from 'react';
import Link from 'next/link';
import * as S from './styled';
import Icon from '@components/atoms/Icon';
import Logo from '@components/atoms/Logo';
import { HeaderMainType, IconType } from '@utils/constants';

export type MainType = {
  type: HeaderMainType;
  content?: string;
};

export type Props = {
  left?: IconType;
  main?: MainType;
  right?: Array<string>;
};

const onClickRightBtn = () => {
  alert('right btn');
};

export const Header: React.FC<Props> = (props) => {
  return (
    <S.Header className="header">
      <div className="left-wrap">
        {props.left && (
          <Link href="/">
            <a>
              <Icon icon={props.left} size={1.1} />
            </a>
          </Link>
        )}
      </div>
      <div className="main-wrap">
        {props.main && (
          <>
            {props.main.type === HeaderMainType.LOGO ? (
              <Logo alt="logo" src="logo" size={4} />
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
              <Icon icon={iconType} size={1.1} onClick={onClickRightBtn} />
            ))}
          </>
        )}
      </div>
    </S.Header>
  );
};
