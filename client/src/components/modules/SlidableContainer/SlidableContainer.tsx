import React from 'react';
import styled from 'styled-components';

const StyledSlidableContainer = styled.div`
  display: flex;
  width: 300px;
  height: 100px;
  overflow-x: scroll;
  background-color: red;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
      display: none;
  }
`;

type Props = {
    children: React.FC;
};

const onClick = () => {
    console.log('hello world');
};

export const SlidableContainer: React.FC = () => {
    return (
        <>
        <div>Maeng2418님을 위해 준비한 상품</div>
        <StyledSlidableContainer>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
            <img src={require('../../../assets/images/coke.jpeg')} alt='coke' style={{width: '100px', height: '100px'}}></img>
        </StyledSlidableContainer>
        </>
    );
};