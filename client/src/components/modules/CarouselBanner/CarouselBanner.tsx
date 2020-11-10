import React, { useState, useEffect, useRef } from 'react';
import { useInterval } from '@utils/customHooks';
import * as S from './styled';

const bigBannerList = [
  { src: `/assets/images/banners/big/banner-big-1.gif`, href: '#' },
  { src: `/assets/images/banners/big/banner-big-2.gif`, href: '#' },
  { src: `/assets/images/banners/big/banner-big-3.gif`, href: '#' },
  { src: `/assets/images/banners/big/banner-big-4.gif`, href: '#' },
  { src: `/assets/images/banners/big/banner-big-5.gif`, href: '#' },
];

const length = bigBannerList.length;

export const CarouselBanner = () => {
  const delay = 3000;
  const [isRunning, setIsRunning] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);

  const carouselBannerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<Array<HTMLDivElement>>([]);

  const initBannerWidth = () => {
    const container = containerRef.current as HTMLDivElement;
    container.scroll({ left: innerWidth, behavior: 'auto' });
  };

  const createIntersectionObserver = () => {
    const carouselBanner = carouselBannerRef.current as HTMLDivElement;
    const contents = contentsRef.current as HTMLDivElement[];

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

    // Last banner to First Banner
    if (scrollWidth - innerWidth - scrollLeft === 0) {
      container.scroll({ left: innerWidth, behavior: 'auto' });
      return;
    }

    // First banner to Last Banner
    if (scrollLeft === 0) {
      container.scroll({ left: scrollWidth - 2 * innerWidth, behavior: 'auto' });
      return;
    }
  };

  // Initial Setting
  useEffect(() => {
    initBannerWidth();
    createIntersectionObserver();
  }, []);

  // Slide to next Banner
  useInterval(
    () => {
      const container = containerRef.current as HTMLDivElement;
      const left = container.scrollLeft + innerWidth;
      container.scroll({ left, behavior: 'smooth' });
    },
    isRunning ? delay : null
  );

  const bannerList =
    length > 1 ? [bigBannerList[length - 1], ...bigBannerList, bigBannerList[0]] : bigBannerList;

  return (
    <S.CarouselBanner ref={carouselBannerRef}>
      <S.SlideList
        ref={containerRef}
        onTouchStart={() => setIsRunning(false)}
        onTouchEnd={() => setIsRunning(true)}
        onScroll={scrollEventHandler}
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
            isCurrent={idx === currentSlide}
            isCloned={idx === 0 || idx === bannerList.length - 1}
          />
        ))}
      </S.IndicatorContainer>
    </S.CarouselBanner>
  );
};
