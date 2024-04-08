import { Box, HStack, Heading, Hide, Image, Show } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { projectName } from '../constants/SupportedNetworkInfo';

export const Logo = () => {
  return (
    <Link to="/">
      {/* <Image src="/CashXLogo.svg" alt="logo" w={[100, 150]}></Image> */}
      <HStack>
        <Box borderRadius="full" borderWidth="thick" boxSize={7}></Box>
        <Heading size="md">{projectName}</Heading>
      </HStack>
    </Link>
  );
};
