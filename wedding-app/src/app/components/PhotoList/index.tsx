import { ImageList, ImageListItem } from "@mui/material"
import Photo from "../Photo"

//needs to get photolist from backend for now i use an hardcoded array
const PhotoList = (): JSX.Element => {
  return (
    <ImageList gap={16} cols={3}>
      {Array.from(Array(8)).map((_, index) => (
        <ImageListItem key={index}>
          <Photo />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
export default PhotoList
