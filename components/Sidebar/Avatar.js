import { Avatar, Flex, Text } from "@chakra-ui/react";

export default function AvatarSidebar() {
  return (
    <Flex alignItems="center" direction="column" mt="auto" mb="20">
      <Avatar
        name="Nicolas Barcellos"
        src="https://github.com/nicolasbarcellos.png"
        my="2"
      ></Avatar>
      <Text fontWeight="bold">Nicolas Barcellos</Text>
    </Flex>
  );
}
