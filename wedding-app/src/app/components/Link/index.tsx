import { Link as MuiLink, TypographyProps } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

type Props = {
  name: string
  to: string
  variant: TypographyProps["variant"]
  underline: "none" | "hover" | "always"
}

const Link = ({ name, to, variant, underline }: Props): JSX.Element => {
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      variant={variant}
      underline={underline}
    >
      {name}
    </MuiLink>
  )
}
export default Link
