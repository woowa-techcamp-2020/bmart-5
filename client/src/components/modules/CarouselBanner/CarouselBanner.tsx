import React, { useState, useEffect, useRef } from 'react';
import { useInterval } from '@utils/customHooks';
import * as S from './styled';
import { CarouselBannerCount } from '@utils/constants';

export const CarouselBanner = () => {
  const delay = 3000;
  const [isRunning, setIsRunning] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);

  const carouselBannerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<Array<HTMLDivElement>>([]);
  const indicatorsRef = useRef<Array<HTMLDivElement>>([]);

  const carouselBanner = carouselBannerRef.current as HTMLDivElement;
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
    const carouselBannerObserveHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSlide(() => contents.indexOf(entry.target as HTMLDivElement));
        }
      });
    };

    const options = {
      root: carouselBanner,
      threshold: 0.9,
    };

    const observer = new IntersectionObserver(carouselBannerObserveHandler, options);

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
      const containerWidth = CarouselBannerCount * innerWidth;
      container.style.scrollBehavior = 'smooth';
      container.scrollLeft = (container.scrollLeft + innerWidth) % containerWidth;
    },
    isRunning ? delay : null
  );

  return (
    <S.CarouselBanner ref={carouselBannerRef}>
      <S.SlideList ref={containerRef}>
        {Array.from({ length: CarouselBannerCount }, (_, idx) => (
          <S.SlideContent
            className="slide_content"
            ref={(el: HTMLDivElement) => {
              contentsRef.current[idx] = el;
            }}
          >
            <img
              className="carousel-banner-image"
              src={`./assets/images/banners/big/banner-big-${idx + 1}.gif`}
            />
          </S.SlideContent>
        ))}
      </S.SlideList>
      <S.IndicatorContainer>
        {Array.from({ length: CarouselBannerCount }, (_, idx) => (
          <S.Indicator
            ref={(el: HTMLDivElement) => {
              indicatorsRef.current[idx] = el;
            }}
          />
        ))}
      </S.IndicatorContainer>
    </S.CarouselBanner>
  );
};
