import React from 'react';
import * as S from './styled';

type Props = {
  width: number;
  height: number;
  name: string;
  url: string;
  id?: number;
  onClick?: () => void;
};

export const CategoryIcon: React.FC<Props> = ({ width, height, id, name, url, onClick }) => {
  const iconClickHandler = () => {
    alert(`goto Category page ${name}(${id})`);
  };
  return (
    <>
      <S.IconContainer width={width + 20} height={height}>
        <S.CategoryImg
          width={width}
          height={height}
          src={url}
          onClick={onClick ? onClick : iconClickHandler}
        />
      </S.IconContainer>
    </>
  );
};
