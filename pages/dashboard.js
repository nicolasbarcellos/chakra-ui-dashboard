import React, { useState } from "react";
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
} from "react-icons/fi";
import NavLink from "../components/Sidebar/NavLink";
import Sidebar from "../components/Sidebar";
import { Main } from "../components/Main";
import { CartTransaction } from "../components/CartTransaction";

export default function Dashboard() {
  return (
    <Flex h="100vh" flexWrap="wrap">
      <Sidebar />
      <Main />
      <CartTransaction />
    </Flex>
  );
}
