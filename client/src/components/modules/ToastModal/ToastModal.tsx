import React, { useState, useRef, useContext, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import * as S from './styled';
import CounterBtn from '@components/atoms/CounterBtn';
import BottomBtn from '@components/atoms/BottomBtn';
import { Context } from '@commons/Context';
import API from '@utils/API';
import { userId } from '@utils/constants';

export const ToastModal: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const modalRef = useRef<HTMLDivElement>(null);
  const { select, setSelect } = useContext(Context);
  const router = useRouter();

  const ModalClose = async () => {
    return new Promise((resolve, reject) => {
      try {
        const modal = modalRef.current as HTMLDivElement;
        setSelect();
        setCount(1);
        modal.style.display = 'none';
        (document.querySelector('html') as HTMLElement).style.overflow = 'scroll';
        resolve(true);
      } catch (err) {
        reject(false);
      }
    });
  };

  return select ? (
    <S.ToastModal className="modal" ref={modalRef}>
      <S.ModalContainer>
        <S.ModalHeader>
          <div className="title">{select.name}</div>
          <div className="close-btn" onClick={ModalClose}>
            닫기
          </div>
        </S.ModalHeader>
        <S.ModalContent className="modal-content">
          <img alt="item" src={select.imgUrl} />
          <div className="item-detail">
            <div>{select.name}</div>
            <div>1회 최대 구매수량 10개</div>
            <div>{(select.price * (100 - select.discount)) / 100}원</div>
          </div>
          <div className="counter">
            <CounterBtn count={count} setCount={setCount} />
          </div>
        </S.ModalContent>
        <BottomBtn
          name={`${count}개 담기`}
          tag={`${((select.price * (100 - select.discount)) / 100) * count}원`}
          onClick={async (event: MouseEvent) => {
            event.stopPropagation();
            await API.post(`/cart`, {
              userId: userId,
              productId: select.id,
              count: count,
            });
            await ModalClose();
            router.push('/cart');
          }}
        />
      </S.ModalContainer>
      <S.ModalBG onClick={ModalClose} />
    </S.ToastModal>
  ) : (
    <></>
  );
};
