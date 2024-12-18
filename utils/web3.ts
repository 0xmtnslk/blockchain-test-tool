import { ethers } from 'ethers';

export const connectWallet = async () => {
  if (!window.ethereum) throw new Error('MetaMask not found');
  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  return provider;
};

export const sendTransaction = async (provider: any, params: any) => {
  const signer = provider.getSigner();
  const tx = await signer.sendTransaction(params);
  return tx;
};
