import { StyledImg } from "./style"

const Photo = (): JSX.Element => {
  return (
    <StyledImg
      src="https://picsum.photos/200/300"
      alt="photo of Jill and Mats"
      loading="lazy"
    />
  )
}
export default Photo
