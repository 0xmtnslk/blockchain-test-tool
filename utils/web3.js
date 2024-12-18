import Web3 from 'web3';
import { ethers } from 'ethers';

export const connectWallet = async () => {
  if (!window.ethereum) throw new Error('MetaMask not found');
  const provider = new ethers.BrowserProvider(window.ethereum);
  return await provider.getSigner();
}

export const sendTestTransactions = async (signer, count, contractAddress) => {
  // Implementation for sending test transactions
}
