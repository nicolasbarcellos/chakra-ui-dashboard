import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Inter",
    heading: "Inter",
  },
  styles: {
    global: {
      th: {
        padding: 0,
      },
      td: {
        padding: 0,
      },
    },
  },
});
