import { Grid } from "@mui/material"
import { useLocation } from "react-router-dom"
import Link from "../Link"
import config from "./config"
import { StyledGrid } from "./style"

const Navigation = (): JSX.Element => {
  const { pathname } = useLocation()
  return (
    <StyledGrid container justifyContent="center" spacing={3}>
      {config.map(({ name, to }) => (
        <Grid item key={name + to}>
          <Link
            name={name}
            to={to}
            variant="body2"
            underline={pathname === to ? "always" : "hover"}
          />
        </Grid>
      ))}
    </StyledGrid>
  )
}
export default Navigation
