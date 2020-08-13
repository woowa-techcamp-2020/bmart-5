import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaSearch, FaBars } from 'react-icons/fa';
import { IconType } from '../../../utils/constants';

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
    default:
      return;
  }
};

const StyledIcon = styled.i<{ size: number }>`
  display: flex;
  width: ${(props) => props.size}rem;
  box-sizing: border-box;
  & > svg {
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
`;

export const Icon: React.FC<Props> = ({ icon, onClick, ...props }) => {
  return (
    <StyledIcon role={icon} onClick={onClick} {...props}>
      {findIcon(icon)}
    </StyledIcon>
  );
};
