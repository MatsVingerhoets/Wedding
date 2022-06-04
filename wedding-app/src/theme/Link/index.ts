import { ComponentsOverrides, Theme } from "@mui/material"

export const link: ComponentsOverrides<Theme>["MuiLink"] = {
  root: {
    fontSize: "1.6rem",
    color: "#636363",
    textDecorationColor: "#636363"
  }
}
