import styled, { keyframes } from 'styled-components';

const slideAni = keyframes`
  0%,
  23% {
    transform: translateX(-100%);
  }
  25%,
  48% {
    transform: translateX(-200%);
  }
  50%,
  73% {
    transform: translateX(-300%);
  }
  75%,
  98% {
    transform: translateX(-400%);
  }
  100% {
    transform: translateX(-500%);
  }
`;

export const Banner = styled.div<{}>`
  margin-top: 30px;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 300px;
  color: #fff;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & article {
    min-width: 100%;
    height: 100%;
    scroll-snap-align: center;
    animation: ${slideAni} 5s linear 0s infinite;
  }

  & article:last-child {
    animation-fill-mode: backwards;
  }

  &:hover {
    & article {
      -webkit-animation-play-state: paused;
      animation-play-state: paused;
    }
  }

  & article:nth-child(1) {
    background-color: #5f488b;
  }
  & article:nth-child(2) {
    background-color: #92abd1;
  }
  & article:nth-child(3) {
    background-color: #0f4c81;
  }
  & article:nth-child(4) {
    background-color: #ff6f61;
  }
  & article:nth-child(5) {
    background-color: #5f488b;
  }
  & article:nth-child(6) {
    background-color: #92abd1;
  }
`;
