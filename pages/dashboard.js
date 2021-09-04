import { Flex } from "@chakra-ui/react";

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
