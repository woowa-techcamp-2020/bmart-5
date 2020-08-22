import React, { useState, useEffect, useRef } from 'react';
import { useInterval } from '@utils/customHooks';
import * as S from './styled';
import { MainBannerCount } from '@utils/constants';

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
      if (currentSlide === MainBannerCount - 1) {
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
          {Array.from({ length: MainBannerCount }, (_, idx) => (
            <div className="slide_content">
              <img
                className="banner-image"
                src={`./assets/images/banners/big/banner-big-${idx + 1}.gif`}
              />
            </div>
          ))}
        </S.SlideList>
      </S.SlideBox>
    </S.Banner>
  );
};
