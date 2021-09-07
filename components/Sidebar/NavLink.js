import { Link, Text, Icon, Box } from "@chakra-ui/react";

export default function NavLink({ children, icon, isActive }) {
  return (
    <Link
      _hover={{ textDecor: "none" }}
      transition="all .4s"
      w={["24px", '24px', '24px',  "100%"]}
      h={["24px", '24px', '24px',  "100%"]}
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
        color={isActive ? "white" : "whiteAlpha.600"}
        _hover={{ color: "white" }}
      >
        {children}
      </Text>
    </Link>
  );
}
