import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  Icon,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import { SidebarNav } from "./Sidebar";

export default function Sidebar({ isLessThan880 }) {
  const [isLargerThan990] = useMediaQuery("(min-width: 990px");
  const [isLessThan460] = useMediaQuery("(max-width: 460px");

  const { isOpen, onClose, onOpen } = useDisclosure();

  console.log(isOpen);

  if (isLessThan460) {
    return (
      <>
        <Flex
          flexWrap="wrap"
          h="20"
          px="2"
          w="100%"
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
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Rise.</DrawerHeader>
              <DrawerBody>
                <SidebarNav />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    );
  }

  return (
    <>
      <SidebarNav />
    </>
  );
}
