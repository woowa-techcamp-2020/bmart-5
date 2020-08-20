import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
`;

export const SlideBox = styled.div`
  width: 100%;
  margin: auto;
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

export const SlideList = styled.div`
  display: flex;

  & .slide_content {
    min-width: 100%;
    height: 400px;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  & .slide_content > p {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 100px;
    font-weight: bold;
    color: #555;
  }

  & .slide01 {
    background: #ddbdff;
  }

  & .slide02 {
    background: #9fd6c2;
  }

  & .slide03 {
    background: #abe2f7;
  }

  & .slide04 {
    background: #f08c78;
  }

  & .slide05 {
    background: #fbdb65;
  }
`;
