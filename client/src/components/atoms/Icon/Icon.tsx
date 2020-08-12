import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaSearch, FaBars } from 'react-icons/fa';
import { fontSize } from '../../../utils/helper';

type Props = {
  icon: string;
  size: number;
  onClick?: () => void;
};

const findIcon = (iconName: string) => {
  switch (iconName) {
    case 'ArrowLeft':
      return <FaArrowLeft />;
    case 'Search':
      return <FaSearch />;
    case 'Bars':
      return <FaBars />;
    default:
      return;
  }
};

const StyledIcon = styled.i<{ size: number }>`
  display: flex;
  font-size: ${(props) => fontSize(props.size)};
  width: 1em;
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
