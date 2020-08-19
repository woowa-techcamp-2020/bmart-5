import React from 'react';
import * as S from './styled';
import { AiOutlineNotification } from 'react-icons/ai';
import { FaArrowLeft, FaSearch, FaBars, FaRegHeart, FaHeart, FaUndoAlt } from 'react-icons/fa';
import { IoMdCloseCircleOutline, IoIosArrowForward } from 'react-icons/io';
import { RiShoppingBagLine } from 'react-icons/ri';
import { IconType } from '@utils/constants';

type Props = {
  icon: string;
  size: number;
  onClick?: () => void;
};

const findIcon = (iconName: string) => {
  switch (IconType[iconName]) {
    case IconType.ARROW_FORWARD:
      return <IoIosArrowForward />;
    case IconType.ARROW_LEFT:
      return <FaArrowLeft />;
    case IconType.BARS:
      return <FaBars />;
    case IconType.CLOSE:
      return <IoMdCloseCircleOutline />;
    case IconType.SEARCH:
      return <FaSearch />;
    case IconType.BASKET:
      return <RiShoppingBagLine />;
    case IconType.REG_HEART:
      return <FaRegHeart />;
    case IconType.HEART:
      return <FaHeart />;
    case IconType.REFRESH:
      return <FaUndoAlt />;
    case IconType.NOTIFICATION:
      return <AiOutlineNotification />;
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
