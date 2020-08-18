import React, { useState, useEffect, useRef } from 'react';
import * as S from './styled';

export const Banner = () => {
  const [curIdx, setCurIdx] = useState(1);
  const slideRef: any = useRef();

  // 복사본 앞뒤 붙이기
  useEffect(() => {
    const slideList = document.querySelector('.slide_list') as HTMLElement;
    const clonedFirst = (slideList.firstElementChild as HTMLElement).cloneNode(true);
    const clonedLast = (slideList.lastElementChild as HTMLElement).cloneNode(true);
    slideList.appendChild(clonedFirst);
    slideList.insertBefore(clonedLast, slideList.firstElementChild);
  }, []);

  // 처음 이동!
  useEffect(() => {
    slideRef.current.style.transition = '300ms';
    slideRef.current.style.transform = `translateX(-${100 * curIdx}%)`;
  }, []);

  // setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurIdx(curIdx + 1);
      slideRef.current.style.transition = '300ms';
      slideRef.current.style.transform = `translateX(-${100 * curIdx}%)`;

      // 벗어나면 초기화
      if (curIdx > 5) {
        setCurIdx(1);
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = `translateX(-${100}%)`;
      }

      // 맨 앞 딜레이 해결은 ????
    }, 1000);

    return () => clearInterval(interval);
  }, [curIdx]);

  return (
    <S.Banner>
      <S.SlideBox className="slide_box">
        <S.SlideList className="slide_list" ref={slideRef}>
          <div className="slide_content slide01">
            <p>1</p>
          </div>
          <div className="slide_content slide02">
            <p>2</p>
          </div>
          <div className="slide_content slide03">
            <p>3</p>
          </div>
          <div className="slide_content slide04">
            <p>4</p>
          </div>
          <div className="slide_content slide05">
            <p>5</p>
          </div>
        </S.SlideList>
      </S.SlideBox>
      <div className="slide_btn_box">
        <button type="button" className="slide_btn_prev">
          Prev
        </button>
        <button type="button" className="slide_btn_next">
          Next
        </button>
      </div>
      <ul className="slide_pagination"></ul>
    </S.Banner>
  );
};
