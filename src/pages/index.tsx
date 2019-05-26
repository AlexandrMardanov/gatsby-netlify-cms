import * as React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const IndexPage: React.FC = () => (
  <>
    <SEO title="home page" />

    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  </>
);

export default IndexPage;