import getConfig from 'next/config';

export type IconType =
  | 'ArrowForward'
  | 'ArrowLeft'
  | 'ArrowUP'
  | 'ArrowDown'
  | 'Bars'
  | 'Basket'
  | 'Close'
  | 'Heart'
  | 'Notification'
  | 'Refresh'
  | 'RegHeart'
  | 'Search'
  | 'Plus'
  | 'RiFileListLine'
  | 'VscSignIn'
  | 'VscSignOut'
  | 'HiOutlineUserAdd';

export enum HeaderMainType {
  LOGO = 'Logo',
  TEXT = 'Text',
  SEARCH_BAR = 'SearchBar',
}

export enum ProductDetailInfoType {
  DELIVERY = 'delivery',
  BENEFIT = 'benefit',
  COUNTRY_OF_ORIGIN = 'contryOfOrigin',
  'delivery' = DELIVERY,
  'benefit' = BENEFIT,
  'contryOfOrigin' = COUNTRY_OF_ORIGIN,
}

export enum ProductDetailInfoTitle {
  DELIVERY = '배달 정보',
  BENEFIT = '적립 혜택',
  COUNTRY_OF_ORIGIN = '원산지표시',
}

export enum FilterType {
  DEFAULT = '기본 정렬순',
  POPULAR = '인기 상품순',
  PRICE_HIGH = '금액 높은순',
  PRICE_LOW = '금액 낮은순',
  RECENTLY = '신규 상품순',
  DISCOUNTED = '할인율 순',
}

export const ProductDeliveryDesc = (data: { earliest: number; latest: number }) => {
  return `배달시간 ${data.earliest}~${data.latest}분 예상`;
};

export const ProductBenefitDesc = (data: { rate: number }) => {
  return `배민페이로 결제하면 포인트 ${data.rate}% 적립`;
};

export const ProductCountryOfOriginDesc = () => {
  return `하단 상세 내용 참고`;
};

const { publicRuntimeConfig } = getConfig();

export const env = publicRuntimeConfig.NODE_ENV || 'development';

export const baseURL =
  `${publicRuntimeConfig.API_END_POINT}:${publicRuntimeConfig.API_PORT}/api` ||
  'http://localhost:3000/api';

export const SlidableContainerLimit = 10;

export const TabViewContainerLimit = 4;

export const FetchableContainerLimit = 6;

export const OrderedCategoriesLimit = 9;

export const MainCategoryContainerLimit = 10;

export const userId = 1;

export const deliveryFee = 1500;

export const deliveryDiscount = 100;

export const CarouselBannerCount = 5;

export const MaxSubCategoryLimitByCategoryId = 9;

export const MaxCategoryCount = 28;

export const MaxSubCategoryCount = 127;

export const CategoryPageMainContainerLimit = 100;

export const CategoryPageSlideContainerLimit = 10;

export const SubCategoryPageContainerLimit = 100;

export const HighestOffProductsLimit = 100;

export const CALL_NUMBER = '1600-0025';

export const SERVICE_EMAIL = 'bmart_together@woowahan.com';

export const WhatEatNowSubCategoryId = 44;

export const NowNeedNecessarySubCategoryId = 45;
