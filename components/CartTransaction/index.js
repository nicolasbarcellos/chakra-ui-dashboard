import { Flex } from "@chakra-ui/react";

import Search from "./Search";
import { CardColumn } from "./CardColumn";

export function CartTransaction({ isLessThan830 }) {
  return (
    <Flex
    mt={isLessThan830 && '50px'}
      flexDir="column"
      p="3%"

      bg="gray.100"
      bg='gray.100' 
      w='100vw' 
      mx='auto'
      w='100vw'
      h="100vh"
    >
      <Search />
      <CardColumn />
    </Flex>
  );
}
