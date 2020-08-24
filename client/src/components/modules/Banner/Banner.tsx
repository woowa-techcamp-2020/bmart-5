import React, { useState, useEffect, useRef } from 'react';
import { useInterval } from '@utils/customHooks';
import * as S from './styled';
import { MainBannerCount } from '@utils/constants';

export const Banner = () => {
  const delay = 3000;
  const [isRunning, setIsRunning] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);

  const bannerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<Array<HTMLDivElement>>([]);
  const indicatorsRef = useRef<Array<HTMLDivElement>>([]);

  const banner = bannerRef.current as HTMLDivElement;
  const container = containerRef.current as HTMLDivElement;
  const contents = contentsRef.current as HTMLDivElement[];
  const indicators = indicatorsRef.current as HTMLDivElement[];

  useEffect(() => {
    addTouchEvent();
    createIntersectionObserver();
  }, []);

  const addTouchEvent = () => {
    containerRef.current?.addEventListener('touchstart', () => {
      setIsRunning(false);
    });
    containerRef.current?.addEventListener('touchend', () => {
      setIsRunning(true);
    });
  };

  const createIntersectionObserver = () => {
    const bannerObserveHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSlide(() => contents.indexOf(entry.target as HTMLDivElement));
        }
      });
    };

    const options = {
      root: banner,
      threshold: 0.9,
    };

    const observer = new IntersectionObserver(bannerObserveHandler, options);

    contents.forEach((content) => {
      observer.observe(content);
    });
  };

  useEffect(() => {
    indicators.forEach((indicator) => {
      indicator.classList.remove('current');
    });
    indicators[currentSlide].classList.add('current');
  }, [currentSlide]);

  useInterval(
    () => {
      const containerWidth = MainBannerCount * innerWidth;
      container.style.scrollBehavior = 'smooth';
      container.scrollLeft = (container.scrollLeft + innerWidth) % containerWidth;
    },
    isRunning ? delay : null
  );

  return (
    <S.Banner ref={bannerRef}>
      <S.SlideList ref={containerRef}>
        {Array.from({ length: MainBannerCount }, (_, idx) => (
          <S.SlideContent
            className="slide_content"
            ref={(el: HTMLDivElement) => {
              contentsRef.current[idx] = el;
            }}
          >
            <img
              className="banner-image"
              src={`./assets/images/banners/big/banner-big-${idx + 1}.gif`}
            />
          </S.SlideContent>
        ))}
      </S.SlideList>
      <S.IndicatorContainer>
        {Array.from({ length: MainBannerCount }, (_, idx) => (
          <S.Indicator
            ref={(el: HTMLDivElement) => {
              indicatorsRef.current[idx] = el;
            }}
          />
        ))}
      </S.IndicatorContainer>
    </S.Banner>
  );
};
