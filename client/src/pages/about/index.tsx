import Link from 'next/link';
import Layout from '@commons/Layout';

const AboutPage = () => (
  <Layout title="About페이지">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
