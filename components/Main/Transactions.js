import {
  Box,
  Flex,
  Heading,
  Icon,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Image,
  Tfoot,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

import { FiCalendar, FiChevronDown, FiChevronUp } from "react-icons/fi";

export function Transactions() {
  const [tableIsShow, setTableIsShow] = useState(false);

  return (
    <Flex flexDir="column">
      <Flex my="12" alignItems="center">
        <Heading fontSize="2xl" fontWeight="bold" mr="6" as="h3">
          Transactions
        </Heading>
        <Text fontWeight="normal" color="gray.400" fontSize="sm" flex="1">
          Set 2021
        </Text>
        <Box
          transition="background .3s"
          _hover={{ bg: "gray.300" }}
          cursor="pointer"
          bg="gray.200"
          p="2"
          rounded="md"
        >
          <Icon fontSize="2xl" color="blackAlpha.900" as={FiCalendar}></Icon>
        </Box>
      </Flex>
      <Table overflow="auto" variant="simple">
        <Thead>
          <Tr>
            <Th
              color="gray.400"
             
            >
              Name of transaction
            </Th>
            <Th color="gray.400">Category</Th>
            <Th color="gray.400" isNumeric>
              Cashback
            </Th>
            <Th color="gray.400"  isNumeric>
              Amount
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td >
              <Flex alignItems="center">
                <Image
                  display="inline-block"
                  objectFit="cover"
                  w="8"
                  h="8"
                  src="amazon.jpeg"
                  alt="amazon"
                ></Image>
                <Flex ml="4" flexDir="column">
                  <Heading fontSize="md" as="h4">
                    Amazon
                  </Heading>
                  <Text fontSize="xs" color="gray.400">
                    Apr 24, 2021 at 1:40pm
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td px='6' fontSize={['x-small', 'small']}>
              <Box
                mr="2"
                verticalAlign="middle"
                display="inline-table"
                borderRadius="full"
                w="2"
                h="2"
                bg="#DD6482"
              ></Box>
              Electronic devices
            </Td>
            <Td isNumeric>+$2</Td>
            <Td isNumeric>
              <strong>-$242.</strong>00
            </Td>
          </Tr>
          <Tr>
            <Td >
              <Flex alignItems="center">
                <Image
                  display="inline-block"
                  objectFit="cover"
                  w="8"
                  h="8"
                  src="youtube.png"
                  alt="youtube"
                ></Image>
                <Flex ml="4" flexDir="column">
                  <Heading fontSize="md" as="h4">
                    Youtube
                  </Heading>
                  <Text fontSize="xs" color="gray.400">
                    Apr 22, 2021 at 6:50pm
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td fontSize={['x-small', 'small']}>
              <Box
                mr="2"
                verticalAlign="middle"
                display="inline-table"
                borderRadius="full"
                w="2"
                h="2"
                bg="#939BCB"
              ></Box>
              Cafe and restaurant
            </Td>
            <Td isNumeric>+$23</Td>
            <Td  isNumeric>
              <strong>-$32.</strong>00
            </Td>
          </Tr>
          <Tr>
            <Td >
              <Flex alignItems="center">
                <Image
                  display="inline-block"
                  objectFit="cover"
                  w="8"
                  h="8"
                  src="starbucks.png"
                  alt="starbucks"
                ></Image>
                <Flex ml="4" flexDir="column">
                  <Heading fontSize="md" as="h4">
                    Starbucks
                  </Heading>
                  <Text fontSize="xs" color="gray.400">
                    Apr 20, 2021 at 3:40pm
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td fontSize={['x-small', 'small']}>
              <Box
                mr="2"
                verticalAlign="middle"
                display="inline-table"
                borderRadius="full"
                w="2"
                h="2"
                bg="#16227F"
              ></Box>
              Social media
            </Td>
            <Td isNumeric>+$4</Td>
            <Td isNumeric>
              <strong>-$112.</strong>00
            </Td>
          </Tr>
          {tableIsShow && (
            <>
              <Tr>
                <Td >
                  <Flex alignItems="center">
                    <Image
                      display="inline-block"
                      objectFit="cover"
                      w="8"
                      h="8"
                      src="amazon.jpeg"
                      alt="amazon"
                    ></Image>
                    <Flex ml="4" flexDir="column">
                      <Heading fontSize="md" as="h4">
                        Amazon
                      </Heading>
                      <Text fontSize="xs" color="gray.400">
                        Apr 20, 2021 at 3:40pm
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td fontSize={['x-small', 'small']}>
                  <Box
                    mr="2"
                    verticalAlign="middle"
                    display="inline-table"
                    borderRadius="full"
                    w="2"
                    h="2"
                    bg="#16227F"
                  ></Box>
                  Social media
                </Td>
                <Td isNumeric>+$4</Td>
                <Td  isNumeric>
                  <strong>-$112.</strong>00
                </Td>
              </Tr>
              <Tr>
                <Td >
                  <Flex alignItems="center">
                    <Image
                      display="inline-block"
                      objectFit="cover"
                      w="8"
                      h="8"
                      src="youtube.png"
                      alt="youtube"
                    ></Image>
                    <Flex ml="4" flexDir="column">
                      <Heading fontSize="md" as="h4">
                        Youtube
                      </Heading>
                      <Text fontSize="xs" color="gray.400">
                        Apr 20, 2021 at 3:40pm
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td fontSize={['x-small', 'small']}>
                  <Box
                    mr="2"
                    verticalAlign="middle"
                    display="inline-table"
                    borderRadius="full"
                    w="2"
                    h="2"
                    bg="#16227F"
                  ></Box>
                  Social media
                </Td>
                <Td isNumeric>+$4</Td>
                <Td  isNumeric>
                  <strong>-$112.</strong>00
                </Td>
              </Tr>
              <Tr>
                <Td >
                  <Flex alignItems="center">
                    <Image
                      display="inline-block"
                      objectFit="cover"
                      w="8"
                      h="8"
                      src="starbucks.png"
                      alt="starbucks"
                    ></Image>
                    <Flex ml="4" flexDir="column">
                      <Heading fontSize="md" as="h4">
                        Starbucks
                      </Heading>
                      <Text fontSize="xs" color="gray.400">
                        Apr 20, 2021 at 3:40pm
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td fontSize={['x-small', 'small']}>
                  <Box
                    mr="2"
                    verticalAlign="middle"
                    display="inline-table"
                    borderRadius="full"
                    w="2"
                    h="2"
                    bg="#16227F"
                  ></Box>
                  Social media
                </Td>
                <Td isNumeric>+$4</Td>
                <Td isNumeric>
                  <strong>-$112.</strong>00
                </Td>
              </Tr>
            </>
          )}
        </Tbody>
      </Table>
      <Center
        onClick={() => setTableIsShow(!tableIsShow)}
        mt="6"
        cursor="pointer"
      >
        <Icon
          fontSize="2xl"
          as={tableIsShow ? FiChevronUp : FiChevronDown}
        ></Icon>
      </Center>
    </Flex>
  );
}
