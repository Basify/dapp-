import {
  HStack,
  Heading,
  Icon,
  Tag,
  VStack,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineFire } from 'react-icons/ai';
import { CiTimer } from 'react-icons/ci';
import { HiUserGroup } from 'react-icons/hi';
import { FaFireFlameSimple } from 'react-icons/fa6';
import { useGetRegistrationsStats } from '../../../hooks/ReferralHooks';
import { PageWrapper } from '../../../util/PageWrapper';
import { defaultChainId } from '../../../constants/SupportedNetworkInfo';
import { CenterComponent, HeadingComponent } from '../../../util/Ui';

export const RegistrationStats = () => {
  const registrationStats = useGetRegistrationsStats(defaultChainId);
  const registrationValues = [
    {
      name: 'Total Users',
      icon: HiUserGroup,
      value: Number(registrationStats?.data?.totalUser) ?? 0,
      currency: undefined,
    },
    {
      name: 'Total Registration Value',
      icon: FaFireFlameSimple,
      value: Number(registrationStats?.data?.totalRegistrationValueInUSD) ?? 0,
      currency: 'USDT',
    },
    {
      name: 'Referral Reward Distributed',
      icon: HiUserGroup,
      value: Number(registrationStats?.data?.totalReferralPaidInUSD) ?? 0,
      currency: 'USDT',
    },
    {
      name: 'Weekly Reward Distributed',
      icon: CiTimer,
      value: Number(registrationStats?.data?.totalWeeklyRewardsPaidInUSD) ?? 0,
      currency: 'USDT',
    },
  ];

  const textColor = useColorModeValue('twitter.500', 'twitter.400');

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
                <Icon as={valuesObject?.icon} boxSize={12}></Icon>

                <HStack>
                  <Heading
                    color="twitter.500"
                    size="lg"
                    fontWeight={900}
                    fontFamily="heading"
                  >
                    {valuesObject?.currency
                      ? Number(valuesObject?.value / 10 ** 18)?.toFixed(2)
                      : Number(valuesObject?.value)}{' '}
                  </Heading>
                  <Heading size="md">
                    {valuesObject?.currency && valuesObject?.currency}
                  </Heading>
                </HStack>
                <Tag colorScheme="blue" fontWeight={900}>
                  {valuesObject?.name}
                </Tag>
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
