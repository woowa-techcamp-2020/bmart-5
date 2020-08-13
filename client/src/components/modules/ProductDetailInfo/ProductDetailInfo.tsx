import React from 'react';
import * as S from './styled';
import {
  ProductDetailInfoTitle,
  ProductDeliveryDesc,
  ProductBenefitDesc,
  ProductCountryOfOriginDesc,
} from '@utils/constants';

type Props = {
  data: dataType;
};

type dataType = {
  earliest: number;
  latest: number;
  rate: number;
};

export const ProductDetailInfo: React.FC<Props> = ({ data }) => {
  return (
    <S.ProductDetailInfo className="wrap">
      <div className="info-row">
        <div className="title">{ProductDetailInfoTitle.DELIVERY}</div>
        <div className="desc">
          {ProductDeliveryDesc({ earliest: data.earliest, latest: data.latest })}
        </div>
      </div>
      <div className="info-row">
        <div className="title">{ProductDetailInfoTitle.BENEFIT}</div>
        <div className="desc">{ProductBenefitDesc({ rate: data.rate })}</div>
      </div>
      <div className="info-row">
        <div className="title">{ProductDetailInfoTitle.COUNTRY_OF_ORIGIN}</div>
        <div className="desc">{ProductCountryOfOriginDesc()}</div>
      </div>
    </S.ProductDetailInfo>
  );
};
