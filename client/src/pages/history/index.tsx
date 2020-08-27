import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import { HeaderMainType } from '@utils/constants';
import HistoryContainer from '@components/templates/HistoryContainer';
import API from '@utils/API';
import HttpStatus from 'http-status';
import { ProductType } from '@pages/index';
import { getCookie } from '@utils/cookie-manager';

type Props = {};

export type HistoryType = {
  id: number;
  purchasedAt: Date;
  cartProducts: Array<ProductType>;
};

const MenuPage: NextPage<Props> = () => {
  const [history, setHistory] = useState<Array<HistoryType>>();
  const layoutProps: LayoutProps = {
    title: 'Bmart 주문내역',
    headerProps: {
      left: 'ArrowLeft',
      main: { type: HeaderMainType.TEXT, content: '주문내역' },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const historyResponse = await historyContainerFetch(getCookie('authorization'));
      setHistory(historyResponse);
    };
    fetchData();
  }, []);

  return (
    <Layout title={layoutProps.title} headerProps={layoutProps.headerProps}>
      <HistoryContainer historyList={history} />
    </Layout>
  );
};

export const historyContainerFetch = async (
  token: string | null
): Promise<Array<HistoryType> | undefined> => {
  let { message, result, status } = (
    await API.get(`/cart/purchase/all`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
  ).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    return result;
  } else {
    console.error(`not defined status code: ${status}`);
    return;
  }
};

export default MenuPage;
