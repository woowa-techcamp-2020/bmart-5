import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import Logo from '../../atoms/Logo';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  & > div.logo-wrap {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > div.wrap {
    display: flex;
    justify-content: space-between;
    & > :first-child {
      margin-right: 1rem;
    }
  }
`;

type Props = {
  children: React.FC;
};

const onClick = () => {
  console.log('hello world');
};

export const Header: React.FC = () => {
  return (
    <StyledHeader className="header">
      <Icon icon="ArrowLeft" size={24} onClick={onClick} />
      <div className="logo-wrap">
        <Logo alt="logo" src="logo" size={80} />
      </div>
      <div className="wrap">
        <Icon icon="Search" size={24} onClick={onClick} />
        <Icon icon="Bars" size={24} onClick={onClick} />
      </div>
    </StyledHeader>
  );
};
