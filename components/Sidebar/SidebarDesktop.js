import {
  Flex,
  Heading,
  useBreakpointValue,
  useMediaQuery,
  VStack,
  IconButton,
  useDisclosure,
  Icon,
  Avatar,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Link,
  Box,
  Text,
  DrawerOverlay,
} from "@chakra-ui/react";
import AvatarSidebar from "./Avatar";
import NavLink from "./NavLink";

import {
  FiBox,
  FiDollarSign,
  FiHome,
  FiPieChart,
  FiMenu,
} from "react-icons/fi";
import { SidebarMobile } from "./SidebarMobile";

import styles from "../../pages/navbar.module.css";

export function SidebarDesktop() {
  const [isLargerThan990] = useMediaQuery("(min-width: 990px");
  const [isLessThan460] = useMediaQuery("(max-width: 460px");

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex
        w={["100%", "100%", "10%", "15%", "15%"]}
        flexDir="column"
        alignItems="center"
        backgroundColor="blackAlpha.900"
        color="white"
      >
        <Flex
          flexDir="column"
          h={[null, null, "100vh"]}
          justifyContent="space-between"
        >
          <Flex flexDir="column" as="nav">
            <Heading
              mt={50}
              mb={[25, 50, 100]}
              fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
              alignSelf="center"
              letterSpacing="tight"
            >
              Rise.
            </Heading>
            <Flex
              flexDir={["row", "row", "column", "column", "column"]}
              align={["center", "center", "center", "flex-start", "flex-start"]}
              wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
              justifyContent="center"
            >
              <Flex mb='4' className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon
                    color="pink.800"
                    as={FiHome}
                    fontSize="2xl"
                    className="active-icon"
                    mr="2"
                  />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text fontWeight="bold" className="active">
                    Home
                  </Text>
                </Link>
              </Flex>
              <Flex mb='4' className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon
                    mr="2"
                    color="gray.400"
                    as={FiPieChart}
                    fontSize="2xl"
                  />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text color="gray.400" fontWeight="bold">
                    Credit
                  </Text>
                </Link>
              </Flex>
              <Flex mb='4' className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon
                    mr="2"
                    color="gray.400"
                    as={FiDollarSign}
                    fontSize="2xl"
                  />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text fontWeight="bold" color="gray.400">
                    Wallet
                  </Text>
                </Link>
              </Flex>
              <Flex mb='4' className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon mr="2" color="gray.400" as={FiBox} fontSize="2xl" />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text fontWeight="bold" color="gray.400">
                    Services
                  </Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src="https://github.com/nicolasbarcellos.png" />
            <Text fontWeight='bold' textAlign="center">
              Nicolas <br /> Barcellos
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
