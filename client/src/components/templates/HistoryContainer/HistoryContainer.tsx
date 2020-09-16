import React from 'react';
import * as S from './styled';
import HistoryCard from '@components/modules/HistoryCard';
import Tung from '@components/atoms/Tung';

type Props = {
  historyList: any;
};

export const HistoryContainer: React.FC<Props> = (props) => {
  return (
    <S.HistoryContainer>
      {props.historyList.length > 0 ? (
        props.historyList.map((history: any, idx: number) => (
          <HistoryCard history={history} key={idx} />
        ))
      ) : (
        <Tung />
      )}
    </S.HistoryContainer>
  );
};
