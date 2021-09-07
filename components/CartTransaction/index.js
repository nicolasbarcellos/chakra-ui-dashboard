import { Flex } from "@chakra-ui/react";

import Search from "./Search";
import { CardColumn } from "./CardColumn";

export function CartTransaction({ isLessThan830 }) {
  return (
    <Flex
    // mt={isLessThan830 && '600px'}
      flexDir="column"
      p="3%"
      overflow={isLessThan830 ? 'normal': 'auto'}
      bg="gray.100"
      flex="1"
      w='100vw'
      h="100vh"
    >
      <Search />
      <CardColumn />
    </Flex>
  );
}
