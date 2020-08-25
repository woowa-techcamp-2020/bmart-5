import React, { useState, useEffect, useRef } from 'react';
import { useInterval } from '@utils/customHooks';
import * as S from './styled';

const bigBannerList = [
  { src: `./assets/images/banners/big/banner-big-1.gif`, href: '#' },
  { src: `./assets/images/banners/big/banner-big-2.gif`, href: '#' },
  { src: `./assets/images/banners/big/banner-big-3.gif`, href: '#' },
  { src: `./assets/images/banners/big/banner-big-4.gif`, href: '#' },
  { src: `./assets/images/banners/big/banner-big-5.gif`, href: '#' },
];

const length = bigBannerList.length;

export const CarouselBanner = () => {
  const delay = 3000;
  const [isRunning, setIsRunning] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);

  const carouselBannerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<Array<HTMLDivElement>>([]);
  const indicatorsRef = useRef<Array<HTMLDivElement>>([]);

  const carouselBanner = carouselBannerRef.current as HTMLDivElement;
  const contents = contentsRef.current as HTMLDivElement[];
  const indicators = indicatorsRef.current as HTMLDivElement[];

  const initBannerWidth = () => {
    const container = containerRef.current as HTMLDivElement;

    container.style.scrollBehavior = 'initial';
    container.scrollLeft += innerWidth;
  };

  const removeUselessIndicators = () => {
    indicators[0].remove();
    indicators[length + 1].remove();
  };

  const createIntersectionObserver = () => {
    const carouselBannerObserveHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        if (contents.indexOf(entry.target as HTMLDivElement) === length + 1) {
          setCurrentSlide(1);
          return;
        }
        if (contents.indexOf(entry.target as HTMLDivElement) === 0) {
          setCurrentSlide(length);
          return;
        }
        setCurrentSlide(() => contents.indexOf(entry.target as HTMLDivElement));
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

  const scrollEventHandler = () => {
    const container = containerRef.current as HTMLDivElement;
    const { scrollWidth, scrollLeft } = container;

    if (scrollWidth - innerWidth - scrollLeft <= 0) {
      container.style.scrollBehavior = 'initial';
      container.scrollLeft = innerWidth;
      container.style.scrollBehavior = 'smooth';
    }
    if (scrollLeft <= 0) {
      container.style.scrollBehavior = 'initial';
      container.scrollLeft = scrollWidth - 2 * innerWidth;
      container.style.scrollBehavior = 'smooth';
    }
  };

  // Initial Setting
  useEffect(() => {
    initBannerWidth();
    removeUselessIndicators();
    createIntersectionObserver();
  }, []);

  // Set Indicator
  useEffect(() => {
    if (currentSlide === 0) return;
    if (currentSlide === length + 1) return;

    indicators.forEach((indicator) => {
      indicator.classList.remove('current');
    });
    indicators[currentSlide].classList.add('current');
  }, [currentSlide]);

  // Slide to next Banner
  useInterval(
    () => {
      const container = containerRef.current as HTMLDivElement;

      container.style.scrollBehavior = 'smooth';
      container.scrollLeft += innerWidth;
    },
    isRunning ? delay : null
  );

  const bannerList =
    length > 1 ? [bigBannerList[length - 1], ...bigBannerList, bigBannerList[0]] : bigBannerList;

  return (
    <S.CarouselBanner ref={carouselBannerRef}>
      <S.SlideList
        ref={containerRef}
        onTouchStart={() => {
          setIsRunning(false);
        }}
        onTouchEnd={() => {
          setIsRunning(true);
        }}
        onScroll={() => {
          scrollEventHandler();
        }}
      >
        {bannerList.map((banner, idx) => (
          <S.SlideContent
            key={idx}
            className="slide_content"
            ref={(el: HTMLDivElement) => {
              contentsRef.current[idx] = el;
            }}
          >
            <a href={banner.href}>
              <img className="carousel-banner-image" src={banner.src} />
            </a>
          </S.SlideContent>
        ))}
      </S.SlideList>
      <S.IndicatorContainer>
        {Array.from({ length: bannerList.length }, (_, idx) => (
          <S.Indicator
            key={idx}
            ref={(el: HTMLDivElement) => {
              indicatorsRef.current[idx] = el;
            }}
          />
        ))}
      </S.IndicatorContainer>
    </S.CarouselBanner>
  );
};
