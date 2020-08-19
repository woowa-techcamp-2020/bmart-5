import React from 'react';
import * as S from './styled';
import CounterBtn from '@components/atoms/CounterBtn';

export const ToastModal: React.FC = (props) => {
  return (
    <S.ToastModal className="modal">
      <S.ModalContainer>
        <S.ModalHeader>
          <div className="title">마미드림 깐대파 100g</div>
          <div className="close-btn">닫기</div>
        </S.ModalHeader>
        <S.ModalContent className="modal-content">
          <img alt="item" src={require('@assets/images/coke.jpeg')} />
          <div className="item-detail">
            <div>마미드림 깐대파 100g</div>
            <div>1회 최대 구매수량 10개</div>
            <div>2,490원</div>
          </div>
          <div className="counter">
            <CounterBtn />
          </div>
        </S.ModalContent>
        <S.BottomBtn priceTag={true}>
          <span>1개 담기</span>
          <span className="price-tag">1,990원</span>
        </S.BottomBtn>
      </S.ModalContainer>
      <S.ModalBG />
    </S.ToastModal>
  );
};
