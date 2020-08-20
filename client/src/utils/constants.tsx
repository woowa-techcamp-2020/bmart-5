export enum IconType {
  ARROW_FORWARD = 'ArrowForward',
  ARROW_LEFT = 'ArrowLeft',
  BARS = 'Bars',
  BASKET = 'Basket',
  CLOSE = 'Close',
  HEART = 'Heart',
  NOTIFICATION = 'Notification',
  REFRESH = 'Refresh',
  REG_HEART = 'RegHeart',
  SEARCH = 'Search',
  'ArrowForward' = ARROW_FORWARD,
  'ArrowLeft' = ARROW_LEFT,
  'Bars' = BARS,
  'Basket' = BASKET,
  'Close' = CLOSE,
  'Heart' = HEART,
  'Notification' = NOTIFICATION,
  'Refresh' = REFRESH,
  'RegHeart' = REG_HEART,
  'Search' = SEARCH,
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

//dotenv로 관리 필요
export const baseURL = 'http://localhost:3000/api';

export const LatestProductsLimit = 9;

export const HighestOffProductsLimit = 4;

export const OrderedCategoriesLimit = 9;
