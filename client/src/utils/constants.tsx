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

export const MaxProductsCountBySubCategoryPageContainer = 100;

export const CALL_NUMBER = '1600-0025';

export const SERVICE_EMAIL = 'bmart_together@woowahan.com';
