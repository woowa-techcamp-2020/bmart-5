import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../components/templates/Layout';
import Axios from 'axios';

type pObject = {
  id: number;
  name: string;
};

type Props = {
  shows: Array<pObject>;
};

const TempPage: NextPage<Props> = (props) => (
  <Layout title="About페이지">
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map((show) => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

// 앱의 어느 페이지에나 추가할 수 있는 정적인 비동기 함수 입니다.
// 이를 사용해서 가지고 온 데이터를 페이지에 props로 넘겨줄 수 있습니다.

TempPage.getInitialProps = async function () {
  const res = (await Axios.get('https://api.tvmaze.com/search/shows?q=batman')).data;

  console.log(`Show data fetched. Count: ${res.length}`);

  return {
    shows: res.map((entry: { show: any }) => entry.show),
  };
};
export default TempPage;
