import { Flex, useMediaQuery } from "@chakra-ui/react";

import Sidebar from "../components/Sidebar";
import { Main } from "../components/Main";
import { CartTransaction } from "../components/CartTransaction";

export default function Dashboard() {
  const [isLessThan830] = useMediaQuery("(max-width:830px)");

  return (
    <Flex
      overflowX='auto'
      w="100vw"
      h="100vh"
      flexWrap="wrap"
    >
      <Sidebar  />
      <Main isLessThan830={isLessThan830} />
      <CartTransaction isLessThan830={isLessThan830} />
    </Flex>
  );
}
