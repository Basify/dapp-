import {
  HStack,
  Heading,
  Icon,
  Tag,
  Text,
  VStack,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFireFlameSimple } from 'react-icons/fa6';
import { GiReceiveMoney } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';
import { RiTimerFlashFill } from 'react-icons/ri';
import { defaultChainId } from '../../../constants/SupportedNetworkInfo';
import { useGetRegistrationsStats } from '../../../hooks/ReferralHooks';
import { PageWrapper } from '../../../util/PageWrapper';
import { CenterComponent, HeadingComponent } from '../../../util/Ui';

export const RegistrationStats = () => {
  const registrationStats = useGetRegistrationsStats(defaultChainId);
  const registrationValues = [
    {
      name: 'Total Users',
      icon: HiUserGroup,
      value: Number(registrationStats?.data?.totalUser) ?? 0,
      currency: undefined,
      color: 'orange.500',
    },
    {
      name: 'Total Registration Value',
      icon: FaFireFlameSimple,
      value: Number(registrationStats?.data?.totalRegistrationValueInUSD) ?? 0,
      currency: 'USDT',
      color: 'red.500',
    },
    {
      name: 'Referral Reward Distributed',
      icon: GiReceiveMoney,
      value: Number(registrationStats?.data?.totalReferralPaidInUSD) ?? 0,
      currency: 'USDT',
      color: 'teal.500',
    },
    {
      name: 'Weekly Reward Distributed',
      icon: RiTimerFlashFill,
      value: Number(registrationStats?.data?.totalWeeklyRewardsPaidInUSD) ?? 0,
      currency: 'USDT',
      color: 'orange',
    },
  ];

  return (
    <PageWrapper>
      <HeadingComponent
        heading={`Protocol that love`}
        gradientHeading="COMMUNITY"
      ></HeadingComponent>
      <Wrap w="full" p={5} justify="center" align="center" spacing={[10, 20]}>
        {registrationValues?.map((valuesObject, key) => {
          return (
            <CenterComponent
              style={{
                minH: 400,
                minW: 250,
              }}
            >
              <VStack spacing={5}>
                <Icon
                  as={valuesObject?.icon}
                  boxSize={20}
                  color={valuesObject?.color}
                ></Icon>
                <VStack>
                  <Heading color="twitter.500" size="lg" fontWeight={900}>
                    {valuesObject?.currency
                      ? Number(valuesObject?.value / 10 ** 18)?.toFixed(2)
                      : Number(valuesObject?.value)}{' '}
                  </Heading>
                  <Heading size="md">
                    {valuesObject?.currency && valuesObject?.currency}
                  </Heading>
                </VStack>
                <Text fontWeight={100}>
                  {valuesObject?.name}
                </Text>
                {/* <Heading size="sm" textAlign="center">
                  {valuesObject?.name}
                </Heading> */}
              </VStack>
            </CenterComponent>
          );
        })}
      </Wrap>
    </PageWrapper>
  );
};
