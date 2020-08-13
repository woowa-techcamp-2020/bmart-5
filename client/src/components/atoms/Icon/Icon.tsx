import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaSearch, FaBars } from 'react-icons/fa';

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
