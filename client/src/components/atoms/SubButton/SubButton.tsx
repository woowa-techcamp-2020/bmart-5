import React, { MouseEvent } from 'react';
import * as S from './styled';
import Icon from '@components/atoms/Icon';

type Props = {
  color?: string;
  backgroundColor?: string;
  label: string;
  withArrow?: boolean;
  onClick?: (e: MouseEvent) => void;
};

export const SubButton: React.FC<Props> = ({
  color,
  backgroundColor,
  label,
  withArrow = false,
  onClick,
}) => {
  return (
    <S.SubButton style={{ color, backgroundColor }} onClick={onClick}>
      <div>{label}</div>
      {withArrow && <Icon icon={'ArrowForward'} size={1} />}
    </S.SubButton>
  );
};
