import React from 'react';
import * as S from './styled';
import { FaArrowLeft, FaSearch, FaBars, FaRegHeart, FaHeart } from 'react-icons/fa';
import { IconType } from '@utils/constants';

type Props = {
  icon: string;
  size: number;
  onClick?: () => void;
};

const findIcon = (iconName: string) => {
  switch (IconType[iconName]) {
    case IconType.ARROW_LEFT:
      return <FaArrowLeft />;
    case IconType.SEARCH:
      return <FaSearch />;
    case IconType.BARS:
      return <FaBars />;
    case IconType.REG_HEART:
      return <FaRegHeart />;
    case IconType.HEART:
      return <FaHeart />;
    default:
      return;
  }
};

export const Icon: React.FC<Props> = ({ icon, onClick, ...props }) => {
  return (
    <S.Icon role={icon} onClick={onClick} {...props}>
      {findIcon(icon)}
    </S.Icon>
  );
};
