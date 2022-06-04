import HeaderTitle from "app/components/HeaderTitle"
import HeaderCaption from "app/components/HeaderCaption"
import Navigation from "app/components/Navigation"
import { StyledContainer } from "./style"

const AppBar = (): JSX.Element => {
  return (
    <StyledContainer>
      <HeaderTitle />
      <HeaderCaption />
      <Navigation />
    </StyledContainer>
  )
}
export default AppBar
