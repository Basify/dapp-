import { CenterComponent, HeadingComponent } from '../../../util/Ui';
import {
  Container,
  Heading,
  Icon,
  Text,
  VStack,
  Wrap,
  Image,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsBox, BsShieldCheck } from 'react-icons/bs';
import { GiCubes, GiWineGlass } from 'react-icons/gi';
import { TbUserHeart } from 'react-icons/tb';
import { PageWrapper } from '../../../util/PageWrapper';
import { FaBookOpenReader } from 'react-icons/fa6';

const TagComponent = ({
  icon,
  heading,
}: {
  icon: IconType;
  heading: string;
}) => {
  return (
    <CenterComponent
      style={{
        minW: 200,
      }}
    >
      <VStack w="full">
        <Icon as={icon} boxSize={14}></Icon>
        <Heading size="sm">{heading}</Heading>
      </VStack>
    </CenterComponent>
  );
};

export const PowerOfBlockchainComponent = () => {
  return (
    <PageWrapper style={{
      spacing: 10
    }}>
      <HeadingComponent
        heading="Build with the power of"
        gradientHeading="BLOCKCHAIN"
      ></HeadingComponent>
      {/* <Icon
        as={GiCubes}
        boxSize={[270, 300]}
        opacity={useColorModeValue(0.75, 1)}
      ></Icon> */}
      <Container>
        <Text textAlign="center">
          Every logic & reward distribution written on secure smart contracts.
          All smart contracts are verified on block explorers & open source.
        </Text>
      </Container>
      
      <Wrap spacing={5} align="center" justify="center">
        <TagComponent icon={GiWineGlass} heading="Transparent"></TagComponent>
        <TagComponent icon={BsShieldCheck} heading="Secured"></TagComponent>
        <TagComponent icon={FaBookOpenReader} heading="Open Source"></TagComponent>
        <TagComponent icon={TbUserHeart} heading="Community Driven"></TagComponent>
        <TagComponent icon={BsBox} heading="Fully Decentralized"></TagComponent>
        {/* <TagComponent icon={FaLock} heading="Renounced"></TagComponent> */}
      </Wrap>
      <Image src={'./bgBlockchain.svg'} maxW={"4xl"}></Image>
    </PageWrapper>
  );
};
