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
  icon: IconType;
  size: number;
  onClick?: (e: MouseEvent) => void;
};

const findIcon = (icon: IconType) => {
  switch (icon) {
    case 'ArrowForward':
      return <IoIosArrowForward />;
    case 'ArrowLeft':
      return <FaArrowLeft />;
    case 'ArrowUP':
      return <RiArrowUpSLine />;
    case 'ArrowDown':
      return <RiArrowDownSLine />;
    case 'Bars':
      return <FaBars />;
    case 'Close':
      return <IoMdCloseCircleOutline />;
    case 'Search':
      return <FaSearch />;
    case 'Basket':
      return <RiShoppingBagLine />;
    case 'RegHeart':
      return <FaRegHeart />;
    case 'Heart':
      return <FaHeart />;
    case 'Refresh':
      return <FaUndoAlt />;
    case 'Notification':
      return <AiOutlineNotification />;
    case 'Plus':
      return <FiPlus />;
    case 'RiFileListLine':
      return <RiFileListLine />;
    case 'VscSignIn':
      return <VscSignIn />;
    case 'VscSignOut':
      return <VscSignOut />;
    case 'HiOutlineUserAdd':
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
