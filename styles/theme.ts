// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { DividerStyles as Divider } from "./DividerStyles";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  components: {
    Divider,
  },
});

export default theme;
