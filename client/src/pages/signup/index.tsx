import React from 'react';
import { NextPage } from 'next';
import Layout, { LayoutProps } from '@commons/Layout';
import { HeaderMainType } from '@utils/constants';
import SignUpContainer from '@components/templates/SignUpContainer';

type Props = {};

const SignUpPage: NextPage<Props> = () => {
  const layoutProps: LayoutProps = {
    title: 'Bmart 회원가입',
    headerProps: {
      left: 'ArrowLeft',
      main: { type: HeaderMainType.TEXT, content: '회원가입' },
    },
  };
  return (
    <Layout title={layoutProps.title} headerProps={layoutProps.headerProps}>
      <SignUpContainer />
    </Layout>
  );
};

export default SignUpPage;
