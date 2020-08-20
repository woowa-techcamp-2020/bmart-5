import React, { useState, useEffect, useRef } from 'react';
import { useInterval } from '@utils/customHooks';
import * as S from './styled';

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const delay = 2000;
  const [isRunning, setIsRunning] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideList = slideRef.current;
    if (!slideList) return;

    slideList.addEventListener('touchstart', () => {
      setIsRunning(false);
    });
    slideList.addEventListener('touchend', () => {
      setIsRunning(true);
    });
  });

  useEffect(() => {
    const slideList = slideRef.current;
    if (!slideList) return;

    slideList.style.transform = `translateX(-${100 * currentSlide}%)`;
  }, [currentSlide]);

  useInterval(
    () => {
      if (currentSlide === 4) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    },
    isRunning ? delay : null
  );

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
    </S.Banner>
  );
};
