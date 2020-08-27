import styled from 'styled-components';

export const ToastModal = styled.div<{}>`
  display: none;
  font-size: 2rem;
  z-index: 2;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  max-width: 48rem;
  transform: translateX(-50%);
  background: rgb(255, 255, 255);
  z-index: 1500;
  opacity: 1;
  border-radius: 0.5rem 0.5rem 0 0;

  @media all and (max-width: 1024px) {
    & {
      max-width: 64rem;
    }
  }
`;

export const ModalBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #dfdfdf;

  & .title {
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    width: 30rem;
    text-overflow: ellipsis;
    margin: 1rem auto;
  }
  & .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  display: flex;

  & img {
    display: block;
    width: 10rem;
    height: 10rem;
    margin: 1rem;
  }

  & .item-detail {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
  }

  & .item-detail div:nth-child(1) {
    font-size: 2rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  & .item-detail div:nth-child(2) {
    margin: 0.5rem 0;
    color: #afafaf;
    font-size: 2rem;
  }

  & .item-detail div:nth-child(3) {
    margin-top: auto;
    font-size: 2rem;
  }

  & .counter {
    margin: auto 2rem auto 1rem;
  }
`;
