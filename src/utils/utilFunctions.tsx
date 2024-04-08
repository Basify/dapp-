import { chains } from '../providers/ProviderWeb3Modal';

export const isChainSupported = (chainId: number) => {
  let i = 0;
  for (i; i < chains.length; i++) {
    if (chains[i].id === chainId) {
      return true;
    }
  }

  return false;
};

export const shortedAddress = (address: `0x${string}` | undefined) => {
  
}
