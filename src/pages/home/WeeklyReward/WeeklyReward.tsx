'use client';
import { HStack, Heading, VStack } from '@chakra-ui/react';
// import { useNetwork } from 'wagmi';
import { sepolia } from 'viem/chains';
import { Counter } from '../../../components/Counter';
import {
  useGetWeeklyRewardToBeDistributed,
} from '../../../hooks/ReferralHooks';
import { PageWrapper } from '../../../util/PageWrapper';
import { HeadingComponent } from '../../../util/Ui';

function WeeklyReward() {
  const weeklyRewardsToBeDistributed = useGetWeeklyRewardToBeDistributed(
    sepolia?.id
  );

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
