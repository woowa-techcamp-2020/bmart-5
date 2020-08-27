import getConfig from 'next/config';

export enum IconType {
  ARROW_FORWARD = 'ArrowForward',
  ARROW_LEFT = 'ArrowLeft',
  ARROW_UP = 'ArrowUP',
  ARROW_DOWN = 'ArrowDown',
  BARS = 'Bars',
  BASKET = 'Basket',
  CLOSE = 'Close',
  HEART = 'Heart',
  NOTIFICATION = 'Notification',
  REFRESH = 'Refresh',
  REG_HEART = 'RegHeart',
  SEARCH = 'Search',
  PLUS = 'Plus',
  RIFILELISTLINE = 'RiFileListLine',
  VSCSIGNIN = 'VscSignIn',
  VSCSIGNOUT = 'VscSignOut',
  HIOUTLINEUSERADD = 'HiOutlineUserAdd',
  'ArrowForward' = ARROW_FORWARD,
  'ArrowLeft' = ARROW_LEFT,
  'ArrowUP' = ARROW_UP,
  'ArrowDown' = ARROW_DOWN,
  'Bars' = BARS,
  'Basket' = BASKET,
  'Close' = CLOSE,
  'Heart' = HEART,
  'Notification' = NOTIFICATION,
  'Refresh' = REFRESH,
  'RegHeart' = REG_HEART,
  'Search' = SEARCH,
  'Plus' = PLUS,
  'RiFileListLine' = RIFILELISTLINE,
  'VscSignIn' = VSCSIGNIN,
  'VscSignOut' = VSCSIGNOUT,
  'HiOutlineUserAdd' = HIOUTLINEUSERADD,
}

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

export const LatestProductsLimit = 9;

export const HighestOffProductsLimit = 4;

export const OrderedCategoriesLimit = 9;

export const TabViewProductsCount = 4;

export const userId = 1;

export const deliveryFee = 1500;

export const deliveryDiscount = 100;

export const CarouselBannerCount = 5;

export const MaxSubCategoryLimitByCategoryId = 9;

export const MaxCategoryCount = 28;

export const MaxSubCategoryCount = 132;

export const MaxProductsCountByMainCategoryContainer = 10;

export const MaxProductsCountByCategoryPageContainer = 100;
