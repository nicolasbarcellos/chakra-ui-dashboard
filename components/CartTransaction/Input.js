import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  InputRightElement,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FiPhoneIncoming, FiSearch } from "react-icons/fi";

export function InputChakra({
  variant = "",
  width = "100%",
  icon,
  name,
  placeholder,
  label,
  ...rest
}) {
  return (
    <FormControl>
      {!!label && <FormLabel fontSize='smaller' color='gray.500' htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={icon}
          color="gray.400"
        />
        <Input
          id={name}
          name={name}
          bg="white"
          width={width}
          variant={variant}
          fontSize="xs"
          placeholder={placeholder}
          {...rest}
        />
      </InputGroup>
    </FormControl>
  );
}
