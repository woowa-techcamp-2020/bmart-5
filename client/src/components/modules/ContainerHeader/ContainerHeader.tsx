import React, { ReactNode } from 'react';
import * as S from './styled';
import SubButton from '@components/atoms/SubButton';
import Icon from '@components/atoms/Icon';
import { IconType } from '@utils/constants';

type Props = {
  children?: ReactNode;
  moreBtn?: boolean;
  iconType?: IconType;
  onIconClickHandler?: Function;
  onMoreBtnClickHandler?: Function;
};

export const ContainerHeader: React.FC<Props> = ({
  children,
  moreBtn,
  iconType,
  onIconClickHandler,
  onMoreBtnClickHandler,
}) => {
  return (
    <S.ContainerHeader>
      {children}
      {moreBtn && (
        <SubButton
          withArrow
          color="#2CC0BD"
          label="더보기"
          onClick={() => (onMoreBtnClickHandler ? onMoreBtnClickHandler() : false)}
        />
      )}
      {iconType && (
        <Icon
          icon={iconType}
          size={3}
          onClick={() => (onIconClickHandler ? onIconClickHandler() : false)}
        />
      )}
    </S.ContainerHeader>
  );
};
