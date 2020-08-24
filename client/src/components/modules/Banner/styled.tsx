import styled from 'styled-components';

export const Banner = styled.div`
  display: flex;
  margin: auto;

  overflow: hidden;
  position: relative;
`;

export const SlideList = styled.div`
  display: flex;
  transition: 300ms;

  overflow-x: scroll;
  -webkit-scroll-snap-type: x mandatory;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
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
`;
