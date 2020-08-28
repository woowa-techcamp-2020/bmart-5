import React from 'react';
import * as S from './styled';
import Link from 'next/link';
import Icon from '@components/atoms/Icon';
import { IconType } from '@utils/constants';

type Props = {
  url: string;
  name: string;
  icon?: IconType;
};

export const LinkBox: React.FC<Props> = ({ url, name, icon }) => {
  return (
    <S.LinkBox>
      <Link href={url}>
        <a>
          {icon && <Icon icon={icon} size={2} />}
          {name}
        </a>
      </Link>
    </S.LinkBox>
  );
};
