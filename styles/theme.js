import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Inter",
    heading: "Inter",
  },
  styles: {
    global: {
      body: {
        overflowX:'hidden',
        w:'100vw'
      },
      th: {
        padding: 0,
      },
      td: {
        padding: 0,
      },
    },
  },
});
