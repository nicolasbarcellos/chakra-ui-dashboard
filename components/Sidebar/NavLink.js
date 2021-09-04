import { Link, Text, Icon } from "@chakra-ui/react";

export default function NavLink({ children, icon, isActive }) {
  return (
    <Link
      _hover={{
        textDecorationThickness: "3px",
        textDecorationLine: "underline",
        textDecorationColor: "pink.800",
      }}
      transition='all .4s'
      width="100%"
      display="flex"
    >
      <Icon
        color={isActive ? "pink.800" : "whiteAlpha.600"}
        mr="4"
        fontSize="2xl"
        as={icon}
      ></Icon>
      <Text
        alignSelf="center"
        letterSpacing="tighter"
        fontWeight="black"
        display="inline-block"
        color={isActive ? 'white' : 'whiteAlpha.600'}
      >
        {children}
      </Text>
    </Link>
  );
}
