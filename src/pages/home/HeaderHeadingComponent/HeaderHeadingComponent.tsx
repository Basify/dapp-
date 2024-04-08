'use client';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { projectName } from '../../../constants/SupportedNetworkInfo';

export const HeaderHeadingComponent = () => {
  const mainHeading = 'POWERFUL CRYPTO REWARD NETWORK';
  const secondaryHeading = `A fully #decentralised protocol that distributes rewards for joining the ${projectName} network`;
  return (
    <Stack spacing={5} maxW="3xl">
      <Text
        // textAlign="center"
        fontSize={['5xl', '6xl', '7xl']}
        fontWeight={900}
        fontFamily="heading"
        lineHeight={1}
        color={useColorModeValue('twitter.500', 'twitter.400')}
      >
        {mainHeading}
      </Text>
      <Heading
        size="lg"
        // textAlign="center"
        // px={5}
        lineHeight={1.2}
        maxW="2xl"
        fontWeight={100}
      >
        {secondaryHeading}
      </Heading>
      <Link to="/registration">
        <button></button>
        <Button
          w={[250, 300, 400]}
          h={16}
          borderRadius={20}
          rightIcon={<ChevronRightIcon />}
          zIndex={1}
          borderBottomWidth="thick"
          variant="outline"
          fontWeight={900}
          colorScheme="twitter"
        >
          ENTER THE APP
        </Button>
      </Link>
    </Stack>
  );
};
