import Web3 from 'web3';
import { ethers } from 'ethers';

export const connectWeb3 = async () => {
  if (typeof window.ethereum !== 'undefined') {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    return web3;
  }
  throw new Error('MetaMask not found');
};
