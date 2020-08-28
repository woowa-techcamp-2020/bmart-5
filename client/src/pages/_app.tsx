import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { Provider } from '@commons/Context';
import Router, { useRouter } from 'next/router';
import { getCookie } from '@utils/cookie-manager';
import NProgress from 'nprogress';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const router = useRouter();
  const token = getCookie('authorization');

  Router.events.on('routeChangeStart', (url) => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  if (
    (router.pathname.startsWith('/signin') && token !== null) ||
    (router.pathname.startsWith('/signup') && token !== null)
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
