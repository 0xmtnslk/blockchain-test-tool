import { Box } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
import ConnectionForm from '../components/TestForm/ConnectionForm';
import Statistics from '../components/Monitoring/Statistics';

export default function Home() {
  return (
    <Layout>
      <Box p={8}>
        <ConnectionForm />
        <Statistics />
      </Box>
    </Layout>
  );
}
