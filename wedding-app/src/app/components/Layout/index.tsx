import { memo } from "react"
import AppBar from "../AppBar"
import HeaderImage from "../HeaderImage"

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <main>
      <HeaderImage />
      <AppBar />
      {children}
    </main>
  )
}
export default memo(Layout)
