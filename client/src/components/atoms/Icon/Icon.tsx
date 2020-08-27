import React, { MouseEvent } from 'react';
import * as S from './styled';
import { AiOutlineNotification } from 'react-icons/ai';
import { FaArrowLeft, FaSearch, FaBars, FaRegHeart, FaHeart, FaUndoAlt } from 'react-icons/fa';
import { IoMdCloseCircleOutline, IoIosArrowForward } from 'react-icons/io';
import {
  RiShoppingBagLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiFileListLine,
} from 'react-icons/ri';
import { FiPlus } from 'react-icons/fi';
import { VscSignIn, VscSignOut } from 'react-icons/vsc';
import { IconType } from '@utils/constants';
import { HiOutlineUserAdd } from 'react-icons/hi';

export type Props = {
  icon: string;
  size: number;
  onClick?: (e: MouseEvent) => void;
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
    case IconType.RIFILELISTLINE:
      return <RiFileListLine />;
    case IconType.VSCSIGNIN:
      return <VscSignIn />;
    case IconType.VSCSIGNOUT:
      return <VscSignOut />;
    case IconType.HIOUTLINEUSERADD:
      return <HiOutlineUserAdd />;
    default:
      return;
  }
};

export const Icon: React.FC<Props> = ({ icon, size, onClick }) => {
  return (
    <S.Icon role={icon} size={size} onClick={onClick}>
      {findIcon(icon)}
    </S.Icon>
  );
};
