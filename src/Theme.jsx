// theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Theme = extendTheme({
  config: {
    initialColorMode: "light", // Default mode
    useSystemColorMode: false, 
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("white", "gray.800")(props), // Background color for light/dark mode
        color: mode("black", "white")(props), // Text color for light/dark mode
      },
    }),
  },
});

export default Theme;
