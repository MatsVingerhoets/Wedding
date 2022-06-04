import { createTheme } from "@mui/material/styles"
import { link } from "./Link"

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: "Roboto",
    allVariants: {
      color: "#636363"
    },
    h1: {
      fontSize: "6rem"
    },
    body1: {
      fontSize: "2rem"
    },
    body2: {
      fontSize: "1.6rem"
    }
  },
  components: {
    MuiLink: {
      styleOverrides: link
    }
  }
})

export default theme
