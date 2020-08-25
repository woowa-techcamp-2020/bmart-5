import React, { useState, useEffect, useRef } from 'react';
import * as S from './styled';

const smallBannerList = [
  { src: `./assets/images/banners/small/banner-small-1.jpg`, href: '#' },
  { src: `./assets/images/banners/small/banner-small-2.jpg`, href: '#' },
  { src: `./assets/images/banners/small/banner-small-3.jpg`, href: '#' },
  { src: `./assets/images/banners/small/banner-small-4.jpg`, href: '#' },
  { src: `./assets/images/banners/small/banner-small-5.jpg`, href: '#' },
];

const length = smallBannerList.length;

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const BannerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<Array<HTMLDivElement>>([]);
  const indicatorsRef = useRef<Array<HTMLDivElement>>([]);

  const Banner = BannerRef.current as HTMLDivElement;
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
    const BannerObserveHandler = (entries: IntersectionObserverEntry[]) => {
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
      root: Banner,
      threshold: 0.9,
    };

    const observer = new IntersectionObserver(BannerObserveHandler, options);

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

  const bannerList =
    length > 1
      ? [smallBannerList[length - 1], ...smallBannerList, smallBannerList[0]]
      : smallBannerList;

  return (
    <S.Banner ref={BannerRef}>
      <S.SlideList ref={containerRef} onScroll={scrollEventHandler}>
        {bannerList.map((banner, idx) => (
          <S.SlideContent
            key={idx}
            className="slide_content"
            ref={(el: HTMLDivElement) => {
              contentsRef.current[idx] = el;
            }}
          >
            <a href={banner.href}>
              <img className="banner-image" src={banner.src} />
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
    </S.Banner>
  );
};
