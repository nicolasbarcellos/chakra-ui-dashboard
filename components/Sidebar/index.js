import { Flex, Heading, VStack } from "@chakra-ui/react";
import { FiHome, FiPieChart, FiDollarSign, FiBox } from "react-icons/fi";
import AvatarSidebar from "./Avatar";

import NavLink from "./NavLink";

export default function Sidebar() {
  return (
    <Flex
   
      flexBasis='200'
      flexDir="column"
      alignItems="center"
      bgColor="blackAlpha.900"
      color="white"
    >
      <Flex flexDir="column">
        <Heading
          letterSpacing="tight"
          alignSelf="center"
          mt={50}
          mb={100}
          fontSize="4xl"
        >
          Rise.
        </Heading>

        <Flex flexDir="column">
          <VStack spacing={10}>
            <NavLink isActive icon={FiHome}>
              Home
            </NavLink>

            <NavLink icon={FiPieChart}>Credit</NavLink>

            <NavLink icon={FiDollarSign}>Wallet</NavLink>

            <NavLink icon={FiBox}>Services</NavLink>
          </VStack>
        </Flex>
      </Flex>

      <AvatarSidebar />
    </Flex>
  );
}
