import Layout from '../components/Layout/Layout';
import ConnectionForm from '../components/TestForm/ConnectionForm';
import Charts from '../components/Monitoring/Charts';
import Logs from '../components/Monitoring/Logs';
import Statistics from '../components/Monitoring/Statistics';

import React from 'react';
import Layout from '../components/Layout/Layout';
import ConnectionForm from '../components/TestForm/ConnectionForm';
import Charts from '../components/Monitoring/Charts';
import Logs from '../components/Monitoring/Logs';
import Statistics from '../components/Monitoring/Statistics';

const Home: React.FC = () => {
  return (
    <Layout>
      <ConnectionForm />
      <Charts />
      <Logs />
      <Statistics />
    </Layout>
  );
}
