import {
  Text,
  Box,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Chart } from "./Chart";
import { Transactions } from "./Transactions";

export function Main({ isLessThan830 }) {
  return (
    <Flex
      flex={["1", "1", "1", "2"]}
      p="3%"
      flexDir="column"
      overflow='auto'
      // overflow={isLessThan830 ? 'normal': 'auto'}
      minW="400"
      h="100vh"
    >
      <Heading letterSpacing="wide" fontWeight="500" as="h2">
        Welcome back, <strong>Nicolas</strong>
      </Heading>

      <Flex
        flexDir="column"
        px="2%"
        mt="8"
        w="100%"
        justifyContent="space-between"
      >
        <Flex mb="1" align="center" justifyContent="space-between">
          <Heading fontWeight="normal" color="gray.400" size="xs" as="h4">
            My Balance
          </Heading>
          <List fontWeight="500" color="blackAlpha.900" fontSize="sm">
            <HStack spacing="6">
              <ListItem>Day</ListItem>
              <ListItem>Week</ListItem>
              <ListItem
                borderRadius="md"
                color="white"
                py="1"
                px="2"
                bg="blackAlpha.900"
                fontWeight="bold"
              >
                Month
              </ListItem>
              <ListItem>Year</ListItem>
            </HStack>
          </List>
        </Flex>
        <Text mb="6" fontWeight="extrabold" fontSize="2xl">
          $5.750.20
        </Text>
        <Chart />
        <Transactions />
      </Flex>
    </Flex>
  );
}
