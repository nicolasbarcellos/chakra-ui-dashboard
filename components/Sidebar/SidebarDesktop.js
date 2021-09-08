import {
  Flex,
  Heading,
  useBreakpointValue,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import AvatarSidebar from "./Avatar";
import NavLink from "./NavLink";

import { FiBox, FiDollarSign, FiHome, FiPieChart } from "react-icons/fi";

export function SidebarDesktop() {
  const [isLargerThan990] = useMediaQuery("(min-width: 990px");
  const [isLessThan460] = useMediaQuery("(max-width: 460px");

  return (
    <Flex
      display={isLessThan460 && 'none'}
      w='15%'
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      bgColor="blackAlpha.900"
      color="white"
    >
      <Flex flexDir="column">
        <Heading
          letterSpacing="tight"
          alignSelf="center"
          mt={50}
          mb={100}
          fontSize={["2xl", "2xl", "2xl", "4xl"]}
        >
          Rise.
        </Heading>

        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <VStack spacing={10}>
            <NavLink isActive icon={FiHome}>
              {isLargerThan990 && "Home"}
            </NavLink>

            <NavLink icon={FiPieChart}>{isLargerThan990 && "Credit"}</NavLink>

            <NavLink icon={FiDollarSign}>{isLargerThan990 && "Wallet"}</NavLink>

            <NavLink icon={FiBox}>{isLargerThan990 && "Services"}</NavLink>
          </VStack>
        </Flex>
      </Flex>

      <AvatarSidebar isLargerThan990={isLargerThan990} />
    </Flex>
  );
}
