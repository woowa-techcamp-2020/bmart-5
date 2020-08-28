import styled from 'styled-components';

export const Banner = styled.div`
  margin: auto;

  overflow: hidden;
  position: relative;
  margin-top: 3px;
`;

export const SlideList = styled.div`
  display: flex;
  transition: 300ms;

  overflow-x: scroll;
  -webkit-scroll-snap-type: x mandatory;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideContent = styled.div`
  min-width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  & .banner-image {
    width: 100%;
    height: auto;
  }
  & a {
    height: 0px;
    background-color: transparent;
  }
`;

export const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Indicator = styled.div`
  width: 1.1rem;
  height: 1.1rem;
  margin-right: 2.5rem;
  border-radius: 10rem;
  background-color: rgba(255, 255, 255, 0.4);
  transition: background-color 300ms;

  &.current {
    background-color: #ffffff;
    box-shadow: 0 0 0 1px #ffffff;
  }

  &:last-child {
    margin-right: 0;
  }
`;
