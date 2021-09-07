import {
  Box,
  Heading,
  Stack,
  HStack,
  Text,
  Flex,
  Icon,
  Image,
} from "@chakra-ui/react";

import { FiCreditCard } from "react-icons/fi";

export function Card({ value }) {
  return (
    <>
      {value === 1 && (
        <Box
          color="white"
          p="6"
          borderRadius="2xl"
          h="200px"
          w="100%"
          bgGradient={`linear(to-t, #B65B92, #29259a )`}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Heading
              letterSpacing="wide"
              fontWeight="400"
              color="whiteAlpha.800"
              fontSize="smaller"
              as="h4"
            >
              Current Balance
            </Heading>
            <HStack alignItems="center">
              <Icon fontSize="2xl" as={FiCreditCard}></Icon>
              <Text fontSize="lg" fontWeight="bold" letterSpacing="widest">
                <span style={{ fontFamily: "Monoton" }}>R</span>
                ise.
              </Text>
            </HStack>
          </Flex>

          <Text fontWeight="bold" fontSize={['sm', 'md', 'md', "2xl"]}>
            $5.750.20
          </Text>

          <Flex alignItems="center" mt="4">
            <Text fontSize="sm" fontStyle="italic">
              **** **** **** 1289
            </Text>
          </Flex>

          <Flex alignItems="center" justifyContent="space-between">
            <Flex
              wrap="nowrap"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="whiteAlpha.700" fontSize="xx-small">
                VALID THRU
              </Text>
              <Text letterSpacing="widest" fontSize="sm" fontStyle="italic">
                12/23
              </Text>
            </Flex>

            <Flex
              alignItems="center"
              justifyContent="center"
              flexDir="column"
              wrap="nowrap"
            >
              <Text color="whiteAlpha.700" fontSize="xx-small">
                CVV
              </Text>
              <Text fontSize="sm">***</Text>
            </Flex>

            <Box w={'20'} h={'20'}>
              <Image
                objectFit="cover"
                src="mastercard.svg"
                alt="mastercard"
              ></Image>
            </Box>
          </Flex>
        </Box>
      )}
      {value === 2 && (
        <Box
          color="white"
          p="6"
          borderRadius="2xl"
          h="200px"
          w="100%"
          bgGradient="linear(to-t, yellow.300, blue.500 )"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Heading
              letterSpacing="wide"
              fontWeight="400"
              color="whiteAlpha.800"
              fontSize="smaller"
              as="h4"
            >
              Current Balance
            </Heading>
            <HStack alignItems="center">
              <Icon fontSize="2xl" as={FiCreditCard}></Icon>
              <Text fontSize="lg" fontWeight="bold" letterSpacing="widest">
                <span style={{ fontFamily: "Monoton" }}>R</span>
                ise.
              </Text>
            </HStack>
          </Flex>

          <Text fontWeight="bold" fontSize="2xl">
            $10.750.20
          </Text>

          <Flex alignItems="center" mt="4">
            <Text fontSize="sm" fontStyle="italic">
              **** **** **** 5550
            </Text>
          </Flex>

          <Flex alignItems="center" justifyContent="space-between">
            <Flex flexDir="column" alignItems="center" justifyContent="center">
              <Text color="whiteAlpha.700" fontSize="xx-small">
                VALID THRU
              </Text>
              <Text letterSpacing="widest" fontSize="sm" fontStyle="italic">
                12/23
              </Text>
            </Flex>

            <Flex alignItems="center" justifyContent="center" flexDir="column">
              <Text color="whiteAlpha.700" fontSize="xx-small">
                CVV
              </Text>
              <Text fontSize="sm">***</Text>
            </Flex>

            <Box w="20" h="20">
              <Image src="mastercard.svg" alt="mastercard"></Image>
            </Box>
          </Flex>
        </Box>
      )}
      {value === 3 && (
        <Box
          color="white"
          p="6"
          borderRadius="2xl"
          h="200px"
          w="100%"
          bgGradient="linear(to-t, orange.300, pink.600 )"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Heading
              letterSpacing="wide"
              fontWeight="400"
              color="whiteAlpha.800"
              fontSize="smaller"
              as="h4"
            >
              Current Balance
            </Heading>
            <HStack alignItems="center">
              <Icon fontSize="2xl" as={FiCreditCard}></Icon>
              <Text fontSize="lg" fontWeight="bold" letterSpacing="widest">
                <span style={{ fontFamily: "Monoton" }}>R</span>
                ise.
              </Text>
            </HStack>
          </Flex>

          <Text fontWeight="bold" fontSize="2xl">
            $2.750.20
          </Text>

          <Flex alignItems="center" mt="4">
            <Text fontSize="sm" fontStyle="italic">
              **** **** **** 3890
            </Text>
          </Flex>

          <Flex alignItems="center" justifyContent="space-between">
            <Flex flexDir="column" alignItems="center" justifyContent="center">
              <Text color="whiteAlpha.700" fontSize="xx-small">
                VALID THRU
              </Text>
              <Text letterSpacing="widest" fontSize="sm" fontStyle="italic">
                12/23
              </Text>
            </Flex>

            <Flex alignItems="center" justifyContent="center" flexDir="column">
              <Text color="whiteAlpha.700" fontSize="xx-small">
                CVV
              </Text>
              <Text fontSize="sm">***</Text>
            </Flex>

            <Box w="20" h="20">
              <Image src="mastercard.svg" alt="mastercard"></Image>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
}
