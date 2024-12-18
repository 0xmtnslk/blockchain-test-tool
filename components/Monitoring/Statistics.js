import { Box, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

export default function Statistics({ txCount, successRate, gasUsed }) {
  return (
    <Box>
      <Stat>
        <StatLabel>Transactions</StatLabel>
        <StatNumber>{txCount}</StatNumber>
      </Stat>
      // Add more stats
    </Box>
  );
}
