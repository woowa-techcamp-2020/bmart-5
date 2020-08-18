// pages안에 파일들은 react의 컴포넌트 파일들과는 다르게 대문자가 아닌 소문자로 시작이 된다.
// pages안에 파일 이름이 곧 url이 된다.

import Link from 'next/link';
import Layout from '../components/templates/Layout';
import Banner from '../components/modules/Banner';

const IndexPage = () => (
  <Layout title="연습용">
    <Banner />
    <h1>연습을 해보자~!!!</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
