import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  InputRightElement,
} from "@chakra-ui/react";
import { FiPhoneIncoming, FiSearch } from "react-icons/fi";

export function InputChakra({
  variant = "",
  width = "100%",
  icon,
  placeholder,
}) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={icon} color="gray.400" />
      <Input
      bg='white'
        width={width}
        variant={variant}
        fontSize="xs"
        type="text"
        placeholder={placeholder}
      />
    </InputGroup>
  );
}
