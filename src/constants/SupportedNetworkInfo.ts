import { Chain, bsc, sepolia } from 'wagmi/chains';
import { PriceOracleObject, ReferralV1ContractObject } from './ContractAddress';

export const projectName = 'BASEFY NETWORK';
export const tagLine = 'Web3 Reward Distribution Protocol';
export const AddressZero: `0x${string}` =
  '0x0000000000000000000000000000000000000000';
export const AddressDead: `0x${string}` =
  '0x000000000000000000000000000000000000dEaD';

export const supportedCurrencyIcons = [
  '/token-icons/usdt.svg',
  '/token-icons/busd.svg',
];

export const defaultChainId = bsc.id;

export interface SupportedTokenInterface {
  contractAddress: `0x${string}`;
  contractABI: any; // Replace `any` with the actual ABI type
  name: string;
  symbol: string;
  decimals: number;
  logo: string; // Assuming `USDTLogoSVG` and `BUSDLogoSVG` are strings representing the SVGs
}

export interface CurrentNetworkInfo {
  referralContractAddress: `0x${string}`;
  referralContractInterface: any;
  priceOracleAddress: `0x${string}`;
  priceOracleInterface: any;
  native: Chain;
  logo: string;
}

export interface SupportedNetworkInfo {
  [key: number]: CurrentNetworkInfo;
}

export const supportedNetworkInfo: SupportedNetworkInfo = {
  [bsc.id]: {
    referralContractAddress: ReferralV1ContractObject?.bscAddress,
    referralContractInterface: ReferralV1ContractObject.abi,
    priceOracleAddress: PriceOracleObject.bscAddress,
    priceOracleInterface: PriceOracleObject.abi,
    native: bsc,
    logo: '/chainIcons/bscSmartChainLogo.svg',
  },
  [sepolia.id]: {
    referralContractAddress: ReferralV1ContractObject?.sepolia,
    referralContractInterface: ReferralV1ContractObject.abi,
    priceOracleAddress: PriceOracleObject.bscAddress,
    priceOracleInterface: PriceOracleObject.abi,
    native: sepolia,
    logo: '/chainIcons/ethereumChainLogo.svg',
  },
};
