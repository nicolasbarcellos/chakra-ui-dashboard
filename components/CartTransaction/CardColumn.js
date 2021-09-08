import {
  Box,
  Heading,
  Stack,
  HStack,
  Text,
  Flex,
  Icon,
  Image,
  Divider,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

import { FiCreditCard, FiPlus, FiDollarSign } from "react-icons/fi";

import { InputChakra } from "./Input";

import { Card } from "./Card";

export function CardColumn() {
  const [changeValue, setChangeValue] = useState(1);

  return (
    <Stack w='100vw' mx='auto' p={4} pb='8' bg='gray.100' mt="12" direction="column" spacing="4">
      <Heading letterSpacing="wide" fontSize="2xl" as="h3">
        My Cards
      </Heading>

      <Card value={changeValue} />

      <Flex mt="-4" w="100%">
        <HStack justifyContent="center" w="100%">
          <Box
            onClick={() => setChangeValue(1)}
            transition="background .3s"
            borderRadius="md"
            cursor="pointer"
            bg={changeValue === 1 ? "gray.500" : "gray.400"}
            w="25px"
            h="25px"
            _hover={{ bg: "gray.300" }}
          ></Box>
          <Box
            onClick={() => setChangeValue(2)}
            transition="background .3s"
            borderRadius="md"
            cursor="pointer"
            bg={changeValue === 2 ? "gray.500" : "gray.400"}
            w="25px"
            h="25px"
            _hover={{ bg: "gray.300" }}
          ></Box>
          <Box
            onClick={() => setChangeValue(3)}
            transition="background .3s"
            borderRadius="md"
            cursor="pointer"
            bg={changeValue === 3 ? "gray.500" : "gray.400"}
            w="25px"
            h="25px"
            _hover={{ bg: "gray.300" }}
          ></Box>
        </HStack>
      </Flex>
      <Box>
        <Divider
          mx="auto"
          borderRadius="lg"
          w="6"
          bg="blackAlpha.900"
          h="6px"
        />

        <Flex my="6" alignItems="center" justifyContent="space-between">
          <Heading
            fontWeight="normal"
            color="gray.600"
            fontSize="small"
            as="h4"
          >
            Balance
          </Heading>
          <Text fontSize="sm" fontWeight="bold">
            $140.420
          </Text>
        </Flex>

        <Flex mb="8" justifyContent="space-between" alignItems="center">
          <Heading
            fontWeight="normal"
            color="gray.600"
            fontSize="small"
            as="h4"
          >
            Credit Limit
          </Heading>
          <Text fontSize="sm" fontWeight="bold">
            $150.000
          </Text>
        </Flex>
      </Box>

      <Box>
        <Heading letterSpacing="wide" fontWeight="bold" fontSize="2xl" as="h3">
          Send money to
        </Heading>
        <HStack mb="6" mt="4" spacing="4">
          <Avatar src="avatar-1.jpg"></Avatar>
          <Avatar src="avatar-2.jpg"></Avatar>
          <Avatar src="avatar-3.jpg"></Avatar>
          <Icon
            cursor="pointer"
            _hover={{ color: "gray.500" }}
            fontSize="3xl"
            as={FiPlus}
          ></Icon>
        </HStack>
      </Box>
      <InputChakra
        variant="outline"
        type="number"
        icon={<FiCreditCard fontSize="20" color="#000" />}
        label="Card number"
        name="cardNumber"
        placeholder="Type a card number..."
      />
      <InputChakra
        variant="outline"
        type="number"
        icon={<FiDollarSign fontSize="20" color="#000" />}
        label="Sum"
        name="sum"
        placeholder="Your sum amount..."
        mb="6"
      />
      <Button
        py={7}
        _hover={{ bg: "blackAlpha.800" }}
        color="white"
        bg="blackAlpha.900"
      >
        Send money
      </Button>
    </Stack>
  );
}
