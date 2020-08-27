import React from 'react';
import * as S from './styled';
import HistoryCard from '@components/modules/HistoryCard';

type Props = {
  historyList: any;
};

export const HistoryContainer: React.FC<Props> = (props) => {
  return (
    <S.HistoryContainer>
      {props.historyList &&
        props.historyList.map((history: any, idx: number) => (
          <HistoryCard history={history} key={idx} />
        ))}
    </S.HistoryContainer>
  );
};
