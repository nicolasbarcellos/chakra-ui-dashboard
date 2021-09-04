import { Flex } from "@chakra-ui/react";

import Search from "./Search";
import { Card } from "./Card";

export function CartTransaction() {
  return (
    <Flex
      flexDir="column"
      p="3%"
      flexBasis="400"
      bg="gray.300"
      overflow="auto"
      bg="gray.100"
    >
      <Search />
      <Card />
    </Flex>
  );
}
