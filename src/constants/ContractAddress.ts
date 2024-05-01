import { Abi, erc20Abi } from 'viem';
import ReferralV1ContractInterface from '../contracts/artifacts/contracts/CashXProtocolReferral.sol/CashXProtocolReferral.json';
import PriceOracleInterface from '../contracts/artifacts/contracts/PriceOracle.sol/PriceOracle.json';
// import { erc20ABI } from 'wagmi';

export const AddressZero: `0x${string}` =
  '0x0000000000000000000000000000000000000000';
export const AddressDead: `0x${string}` =
  '0x000000000000000000000000000000000000dEaD';

export type ContractObject = {
  abi: any;
  base: `0x${string}`;
  sepolia: `0x${string}`;
};

export type TokenContractObject = {
  abi: Abi;
  bscAddress: `0x${string}`;
};

export const ReferralV1ContractObject: ContractObject = {
  abi: ReferralV1ContractInterface?.abi,
  base: '0x08D4FdD6Ca1d4eDA887733937785325903ef1407',
  sepolia: '0xd871D753DB61927D436Ed43D63687FEDe0B49252',
};

export const PriceOracleObject: ContractObject = {
  abi: PriceOracleInterface?.abi,
  base: '0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70',
  sepolia: '0x694AA1769357215DE4FAC081bf1f309aDC325306',
};
