import React, { ReactNode } from 'react';
import Normalize from '@commons/styles/Normalize';
import Header, { HeaderProps } from '@components/modules/Header';
import Footer from '@components/modules/Footer';
import Content from '@components/modules/Content';
import Head from 'next/head';

export type Props = {
  children?: ReactNode;
  title?: string;
  headerProps: HeaderProps;
};

export const Layout = ({ children, title = 'B 마트', headerProps }: Props) => (
  <>
    <Normalize />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
    <Header left={headerProps.left} main={headerProps.main} right={headerProps.right} />
    <Content>{children}</Content>
    <Footer />
  </>
);
