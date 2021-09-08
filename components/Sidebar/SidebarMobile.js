import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Link,
  DrawerOverlay,
  Flex,
  Text,
  Icon,
  IconButton,
  useDisclosure,
  useMediaQuery,
  Heading,
  VStack,
  Box,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import AvatarSidebar from "./Avatar";

import { FiBox, FiDollarSign, FiHome, FiPieChart } from "react-icons/fi";

export function SidebarMobile({ isLessThan880 }) {
  const [isLargerThan990] = useMediaQuery("(min-width: 990px");
  const [isLessThan460] = useMediaQuery("(max-width: 460px");

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box bg='red'>
      <Flex
        h="20"
        px="2"
        w="100%"
        minW='100%'
        color="white"
        bg="blackAlpha.900"
        alignItems="center"
        justifyContent="space-around"
      >
        <IconButton
          aria-label="Open navigation"
          onClick={onOpen}
          variant="unstyled"
          fontSize="24"
          mr="2"
          icon={<Icon as={FiMenu} />}
        ></IconButton>
        <Text fontSize="2xl" fontWeight="bold" letterSpacing="widest">
          <span style={{ fontFamily: "Monoton" }}>R</span>
          ise.
        </Text>
        <Flex flexDir="column" justifyContent="center" alignItems="center">
          <Avatar
            name="Nicolas Barcellos"
            src="https://github.com/nicolasbarcellos.png"
          ></Avatar>
          <Text
            ml="2"
            mt="2"
            textAlign="center"
            fontSize={isLargerThan990 ? "md" : "x-small"}
            fontWeight="bold"
          >
            Nicolas Barcellos
          </Text>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="blackAlpha.900" p={4} color="white">
            <DrawerCloseButton />
            <DrawerBody>
              <Flex flexDir="column">
                <Heading
                  letterSpacing="tight"
                  alignSelf="center"
                  mt={10}
                  mb={10}
                  fontSize={"3xl"}
                >
                  Rise.
                </Heading>
                <VStack
                  w="100%"
                  h="100%"
                  alignItems="center"
                  spacing={10}
                  justifyContent="center"
                >
                  <Flex alignItems="center" justifyContent="center">
                    <Icon
                      mr="4"
                      fontSize="3xl"
                      color={"pink.800"}
                      as={FiHome}
                    ></Icon>
                    <Text
                      fontWeight="bold"
                      alignSelf="center"
                      display="inline-block"
                    >
                      Home
                    </Text>
                  </Flex>

                  <Flex alignItems="center">
                    <Icon
                      fontSize="3xl"
                      mr="4"
                      color={"whiteAlpha.600"}
                      as={FiPieChart}
                    ></Icon>
                    <Text
                      fontWeight="bold"
                      alignSelf="center"
                      display="inline-block"
                      color="whiteAlpha.600"
                    >
                      Credit
                    </Text>
                  </Flex>

                  <Flex alignItems="center">
                    <Icon
                      mr="4"
                      fontSize="3xl"
                      color={"whiteAlpha.600"}
                      as={FiDollarSign}
                    ></Icon>
                    <Text
                      fontWeight="bold"
                      alignSelf="center"
                      display="inline-block"
                      color="whiteAlpha.600"
                    >
                      Wallet
                    </Text>
                  </Flex>

                  <Flex justifyContent="center" alignItems="center">
                    <Icon
                      mr="4"
                      fontSize="3xl"
                      color={"whiteAlpha.600"}
                      as={FiBox}
                    ></Icon>
                    <Text
                      fontWeight="bold"
                      alignSelf="center"
                      display="inline-block"
                      color="whiteAlpha.600"
                    >
                      Services
                    </Text>
                  </Flex>
                </VStack>
              </Flex>
              <Box mt="20">
                <AvatarSidebar />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}
