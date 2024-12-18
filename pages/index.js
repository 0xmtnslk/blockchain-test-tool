import Layout from '../components/Layout/Layout';
import ConnectionForm from '../components/TestForm/ConnectionForm';
import Charts from '../components/Monitoring/Charts';
import Logs from '../components/Monitoring/Logs';
import Statistics from '../components/Monitoring/Statistics';

export default function Home() {
  return (
    <Layout>
      <ConnectionForm />
      <Charts />
      <Logs />
      <Statistics />
    </Layout>
  );
}
