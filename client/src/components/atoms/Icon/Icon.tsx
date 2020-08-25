import React, { MouseEvent } from 'react';
import * as S from './styled';
import { AiOutlineNotification } from 'react-icons/ai';
import { FaArrowLeft, FaSearch, FaBars, FaRegHeart, FaHeart, FaUndoAlt } from 'react-icons/fa';
import { IoMdCloseCircleOutline, IoIosArrowForward } from 'react-icons/io';
import { RiShoppingBagLine, RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { FiPlus } from 'react-icons/fi';
import { IconType } from '@utils/constants';

export type Props = {
  icon: string;
  size: number;
  onClick: (e: MouseEvent) => void;
};

const findIcon = (iconName: string) => {
  switch (IconType[iconName]) {
    case IconType.ARROW_FORWARD:
      return <IoIosArrowForward />;
    case IconType.ARROW_LEFT:
      return <FaArrowLeft />;
    case IconType.ARROW_UP:
      return <RiArrowUpSLine />;
    case IconType.ARROW_DOWN:
      return <RiArrowDownSLine />;
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
    case IconType.PLUS:
      return <FiPlus />;
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
