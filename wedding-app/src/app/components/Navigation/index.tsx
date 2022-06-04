import { Grid } from "@mui/material"
import { useLocation } from "react-router-dom"
import Link from "../Link"
import config from "./config"

const Navigation = (): JSX.Element => {
  const { pathname } = useLocation()
  console.log(pathname === config[0].to)
  return (
    <Grid container justifyContent="center" spacing={3}>
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
    </Grid>
  )
}
export default Navigation
