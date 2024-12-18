import { Box, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

import React from 'react';
import { Box, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

interface StatisticsProps {
  txCount: number;
  successRate: number;
  gasUsed: string;
}

const Statistics: React.FC<StatisticsProps> = ({ txCount, successRate, gasUsed }) => {
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
