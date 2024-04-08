'use client';
import { HStack, Heading, VStack } from '@chakra-ui/react';
// import { useNetwork } from 'wagmi';
import { Counter } from '../../../components/Counter';
import { supportedNetworkInfo } from '../../../constants/SupportedNetworkInfo';
import {
  useGetWeeklyRewardToBeDistributed,
  useNativePrice,
} from '../../../hooks/ReferralHooks';
import { PageWrapper } from '../../../util/PageWrapper';
import { HeadingComponent } from '../../../util/Ui';
import { bsc } from 'viem/chains';

function WeeklyReward() {
  const weeklyRewardsToBeDistributed = useGetWeeklyRewardToBeDistributed(
    bsc.id
  );
  console.log(weeklyRewardsToBeDistributed);
  const useCurrentNetwork = supportedNetworkInfo[bsc.id];
  const nativePrice = useNativePrice(useCurrentNetwork?.priceOracleAddress!);

  return (
    <PageWrapper>
      <HeadingComponent
        heading="Weekly Rewards to be"
        gradientHeading="DISTRIBUTED"
      ></HeadingComponent>
      <VStack>
        <HStack>
          <Heading>
            {Number(
              Number(weeklyRewardsToBeDistributed?.data?.rewardValue) / 10 ** 18
            )?.toFixed(2)}
          </Heading>
          <Heading color="orange.500">USDT</Heading>
        </HStack>
      </VStack>
      <VStack>
        <Heading>Remaining Time</Heading>
        <Counter
          timeinseconds={Number(weeklyRewardsToBeDistributed?.data?.endTime)}
        ></Counter>
      </VStack>
    </PageWrapper>
  );
}

export default WeeklyReward;
