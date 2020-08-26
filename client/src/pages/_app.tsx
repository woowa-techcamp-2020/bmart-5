import { useContext } from 'react';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { Provider, Context } from '@commons/Context';
import { useRouter } from 'next/router';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const router = useRouter();
  const { user } = useContext(Context);
  if (
    (router.pathname.startsWith('/signin') && user !== null) ||
    (router.pathname.startsWith('/signup') && user !== null) ||
    (router.pathname.startsWith('/cart') && user === null)
  ) {
    router.replace('/');
  }

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
