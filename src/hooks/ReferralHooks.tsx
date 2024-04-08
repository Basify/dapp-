import { useChainId, useReadContract } from 'wagmi';
import { ReferralV1ContractObject } from '../constants/ContractAddress';
import { supportedNetworkInfo } from '../constants/SupportedNetworkInfo';

export const useReferralContractReads = ({
  functionName,
  args,
  chainId,
}: {
  functionName: string;
  args?: any[];
  chainId?: number;
}) => {
  const currentChain = useChainId();
  const currentNetwork = supportedNetworkInfo[chainId ?? currentChain];
  // @ts-ignore
  const result = useReadContract({
    address: currentNetwork?.referralContractAddress,
    abi: ReferralV1ContractObject?.abi,
    functionName: functionName,
    args: args ?? [],
    chainId: chainId ?? currentChain,
  });

  if (result?.isError) {
    console.log('Referral Hook Error', result?.error);
    return undefined;
  }

  return result;
};

export type UpgradeStructType = {
  id: bigint;
  valueToUpgradeInUSD: bigint;
};

export const useUpgradePlans = () => {
  const value = useReferralContractReads({
    functionName: 'getUpgradePlans',
  });

  const object = {
    value: value,
    data: value?.isSuccess
      ? (value?.data as unknown as UpgradeStructType[])
      : undefined,
  };

  return object;
};

export const useGetUpgradePlanById = (id: number) => {
  const value = useReferralContractReads({
    functionName: 'getUpgradePlansById',
    args: [id],
  });

  const object = {
    value: value,
    data: value?.isSuccess
      ? (value?.data as unknown as UpgradeStructType)
      : undefined,
  };

  return object;
};

export type UserCurrentUpgradeLevelType = {
  level: bigint;
  totalUpgradeValueInUSD: bigint;
};

export const useGetUserCurrentUpgradeLevel = (
  userAddress: `0x${string}` | undefined
) => {
  const value = useReferralContractReads({
    functionName: 'getUserCurrentUpgradeLevel',
    args: [userAddress],
  });

  const object = {
    value: value,
    data: value?.isSuccess
      ? (value?.data as unknown as UserCurrentUpgradeLevelType)
      : undefined,
  };

  return object;
};

export const useNeedNativeToRegister = (priceOracleAddress: `0x${string}`) => {
  const value = useReferralContractReads({
    functionName: 'needNativeToRegister',
    args: [priceOracleAddress],
  });

  const object = {
    value: value,
    data: value?.isSuccess ? (value?.data as unknown as bigint) : undefined,
  };

  return object;
};

export const useNativePrice = (priceOracleAddress: `0x${string}`) => {
  const value = useReferralContractReads({
    functionName: 'getNativePriceInUSD',
    args: [priceOracleAddress],
  });

  const object = {
    value: value,
    data: value?.isSuccess ? (value?.data as unknown as bigint) : undefined,
  };

  return object;
};

export type UserBusinessType = {
  selfBusiness: bigint;
  directBusiness: bigint;
  teamBusiness: bigint;
  totalBusiness: bigint;
};

export const useGetUserBusiness = (userAddress: `0x${string}` | undefined) => {
  const value = useReferralContractReads({
    functionName: 'getUserBusiness',
    args: [userAddress],
  });

  console.log(value);

  const data = (value?.data as unknown as bigint[] | undefined) ?? undefined;

  const object = {
    value: value,
    data: {
      selfBusiness: data?.[0],
      directBusiness: data?.[1],
      teamBusiness: data?.[2],
      totalBusiness: data?.[3],
    },
  };

  return object;
};

export type UserRewardType = {
  referralRewardInUSD: bigint;
  weeklyRewardInUSD: bigint;
  upgradeRewardsInUSD: bigint;
  totalRewards: bigint;
};

export const useGetUserRewards = (userAddress: `0x${string}` | undefined) => {
  const value = useReferralContractReads({
    functionName: 'getUserRewards',
    args: [userAddress],
  });

  const object = {
    value: value,
    data: value?.isSuccess
      ? (value?.data as unknown as UserRewardType)
      : undefined,
  };

  return object;
};

export type TypeTeamStruct = {
  teamMember: `0x${string}`;
  level: number;
};

export type UserTeamObjectType = {
  referrer: `0x${string}`;
  referees: `0x${string}`[];
  refereeCount: number;
  refereeAssigned: `0x${string}`[] | [];
  refereeAssignedCount: number;
  team: TypeTeamStruct[];
  teamCount: number;
};

export const useGetUserTeam = (userAddress: `0x${string}` | undefined) => {
  const value = useReferralContractReads({
    functionName: 'getUserTeam',
    args: [userAddress],
  });

  const object = {
    value: value,
    data: value?.isSuccess
      ? (value?.data as unknown as UserTeamObjectType)
      : undefined,
  };

  return object;
};

export const useGetWeeklyRewardToBeDistributed = (chainId?: number) => {
  const value = useReferralContractReads({
    functionName: 'getWeeklyRewardToBeDistributed',
    chainId: chainId,
  });

  const data = value?.data as unknown as bigint[] | undefined;

  const object = {
    value: value,
    data: {
      rewardValue: data?.[0],
      remianingTime: data?.[1],
      endTime: data?.[2],
    },
  };

  return object;
};

export type RegistrationStatsType = {
  totalUser: bigint;
  totalRegistrationValueInUSD: bigint;
  totalReferralPaidInUSD: bigint;
  totalWeeklyRewardsPaidInUSD: bigint;
};

export const useGetRegistrationsStats = (chainId?: number) => {
  const value = useReferralContractReads({
    functionName: 'getRegistrationsStats',
    chainId: chainId,
  });

  const data = (value?.data as unknown as bigint[]) ?? undefined;

  const object = {
    value: value,
    data: {
      totalUser: data?.[0],
      totalRegistrationValueInUSD: data?.[1],
      totalReferralPaidInUSD: data?.[2],
      totalWeeklyRewardsPaidInUSD: data?.[3],
    },
  };

  return object;
};
