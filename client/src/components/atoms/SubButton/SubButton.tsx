import React from 'react';
import * as S from './styled';
import Icon from '@components/atoms/Icon';
import { IconType } from '@utils/constants';

type Props = {
  color?: string;
  backgroundColor?: string;
  label: string;
  withArrow?: boolean;
};

export const SubButton: React.FC<Props> = ({
  color,
  backgroundColor,
  label,
  withArrow = false,
}) => {
  return (
    <S.SubButton style={{ color, backgroundColor }}>
      <div>{label}</div>
      {withArrow && <Icon icon={IconType.ARROW_FORWARD} size={1} />}
    </S.SubButton>
  );
};
