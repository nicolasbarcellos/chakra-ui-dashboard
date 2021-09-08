import { Box, Flex, Icon, IconButton } from "@chakra-ui/react";

import { FiBell, FiSearch } from "react-icons/fi";

import { InputChakra } from "./Input";

export default function Search() {
  return (
    <Flex
      pt='6'
      px='3'
      alignItems="center"
      justifyContent="space-between"
    >
      <InputChakra
        // variant="unstyled"
        width="90%"
        icon={<FiSearch fontSize="20" />}
        placeholder="Search"
      />
      <Flex position="relative">
        <IconButton
          fontSize="20"
          bg="white"
          aria-labe="notifications"
          colorScheme="gray"
          icon={<FiBell />}
        />
        <Flex
          justifyContent="center"
          alignItems="center"
          bg="#DF6281"
          borderRadius="full"
          w={5}
          h={5}
          color="white"
          fontWeight="bold"
          fontSize="xs"
          position="absolute"
          right="-1"
          top="-2"
        >
          2
        </Flex>
      </Flex>
    </Flex>
  );
}
