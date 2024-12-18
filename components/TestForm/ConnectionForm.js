import React, { useState } from 'react';
import { Button, FormControl, Input } from '@chakra-ui/react';
import { connectWeb3 } from '../../utils/web3';

const ConnectionForm: React.FC = () => {
  const [rpcUrl, setRpcUrl] = useState('');
  
  const handleConnect = async () => {
    try {
      await connectWeb3();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormControl>
      <Input 
        value={rpcUrl}
        onChange={(e) => setRpcUrl(e.target.value)}
        placeholder="RPC URL"
      />
      <Button onClick={handleConnect}>Connect</Button>
    </FormControl>
  );
}
