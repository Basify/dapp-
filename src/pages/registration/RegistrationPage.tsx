import { Divider, HStack, Heading, Icon, VStack } from '@chakra-ui/react';
import { FcGoodDecision } from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import { useAccount, useChainId } from 'wagmi';
import RegistrationUI from '../../components/RegistrationUI/RegistrationUI';
import UpgradeUI from '../../components/UpgradeUi/UpgradeUi';
import { supportedNetworkInfo } from '../../constants/SupportedNetworkInfo';
import {
  UserBusinessType,
  useGetUserBusiness,
  useGetUserCurrentUpgradeLevel,
  useNativePrice,
  useNeedNativeToRegister,
  useUpgradePlans,
} from '../../hooks/ReferralHooks';
import { CheckReferrerActive } from './CheckReferrerActive';

export default function RegistrationPage() {
  // const { chain } = useNetwork();
  const chainId = useChainId();
  const currentNetwork = supportedNetworkInfo[chainId];
  const { address } = useAccount();
  const { referrerAddress } = useParams<{ referrerAddress: `0x${string}` }>();
  const userBusinessObject = useGetUserBusiness(address);
  const userBusiness = userBusinessObject?.data as unknown as UserBusinessType;

  const userLevelToUpgrade = useGetUserCurrentUpgradeLevel(address);
  const nativePrice = useNativePrice(currentNetwork?.priceOracleAddress!);
  const upgradePlansObject = useUpgradePlans();
  // const upgradePlans = upgradePlansObject?.data as unknown as number;
  const valueToRegister = useNeedNativeToRegister(
    currentNetwork.priceOracleAddress!
  );

  return (
    <CheckReferrerActive
      check={(userBusiness?.selfBusiness ?? 0) > 0 ? false : true}
    >
      <VStack spacing={10} py={100} minH={'100vh'}>
        <VStack>
          <HStack>
            <Icon as={FcGoodDecision} boxSize={10}></Icon>
            <Heading color="orange.500">
              {Number(userBusiness.selfBusiness ?? 0) === 0
                ? 'Register'
                : 'Upgrade'}
            </Heading>
          </HStack>
          <Divider />
        </VStack>
        {Number(userBusiness.selfBusiness ?? 0) === 0 ? (
          <RegistrationUI
            referrerAddress={referrerAddress}
            valueInDecimals={Number(valueToRegister ?? 0) / 10 ** 18}
            currentNetwork={currentNetwork}
          ></RegistrationUI>
        ) : (
          <UpgradeUI
            upgradePlan={
              upgradePlansObject?.data?.[
                Number(userLevelToUpgrade?.data?.level) ?? 0
              ]
            }
            valueInDecimals={
              upgradePlansObject?.data
                ? Number(
                    upgradePlansObject?.data?.[
                      Number(userLevelToUpgrade?.data?.level) ?? 0
                    ].valueToUpgradeInUSD ?? 0
                  ) / Number(nativePrice)
                : 0
            }
            currentNetwork={currentNetwork}
          ></UpgradeUI>
        )}
        ;
      </VStack>
    </CheckReferrerActive>
  );
}
