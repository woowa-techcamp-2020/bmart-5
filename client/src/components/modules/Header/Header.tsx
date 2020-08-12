import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  border-radius: 5px;
  padding: 5px;
  min-height: 30px;
  background-color: white;
  font-weight: 600;
  border: 2px solid black;
`;

export const Header: React.FC = () => {
  return <StyledHeader className="header">헤더</StyledHeader>;
};
