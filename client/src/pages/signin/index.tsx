import React from 'react';
import { NextPage } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import { HeaderMainType } from '@utils/constants';
import SignInContainer from '@components/templates/SignInContainer';

type Props = {};

const SignInPage: NextPage<Props> = () => {
  const layoutProps: LayoutProps = {
    title: 'Bmart 로그인',
    headerProps: {
      left: 'ArrowLeft',
      main: { type: HeaderMainType.TEXT, content: '로그인' },
    },
  };
  return (
    <Layout title={layoutProps.title} headerProps={layoutProps.headerProps}>
      <SignInContainer />
    </Layout>
  );
};

export default SignInPage;
