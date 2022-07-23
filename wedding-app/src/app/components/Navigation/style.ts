import styled from "@emotion/styled"
import { Grid } from "@mui/material"
import { Link } from "@mui/material"

export const StyledGrid = styled(Grid)({
  marginBottom: "2rem"
})

export const StyledMuiLink = styled(Link)({
  color: "black",
  position: "relative",

  "&:before": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "-3px",
    left: "50%",
    transform: "translate(-50%,0%)",
    backgroundColor: "red",
    transformOrigin: "center",
    visibility: "hidden",
    transition: "all 0.3s ease-in-out"
  },
  "&:hover:before": {
    visibility: "visible",
    width: "100%"
  }
})
