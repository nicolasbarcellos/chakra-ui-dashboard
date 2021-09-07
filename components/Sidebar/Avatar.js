import { Avatar, Flex, Text } from "@chakra-ui/react";

export default function AvatarSidebar({ isLargerThan990 }) {
  console.log(isLargerThan990)
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      mt="auto"
      mb="20"
    >
      <Avatar
        name="Nicolas Barcellos"
        src="https://github.com/nicolasbarcellos.png"
        my="2"
      ></Avatar>
      <Text
        textAlign="center"
        fontSize={isLargerThan990 ? "md" : "x-small"}
        fontWeight="bold"
      >
        Nicolas Barcellos
      </Text>
    </Flex>
  );
}
