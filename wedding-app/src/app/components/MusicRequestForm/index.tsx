import { Button, Grid, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import * as yup from "yup"

const MusicRequestForm = (): JSX.Element => {
  const validationSchema = yup.object({
    songName: yup.string().required("song name is required"),
    artist: yup.string().required("song name is required")
  })
  const formik = useFormik({
    initialValues: {
      songName: "",
      artist: ""
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={3}
    >
      <Grid item>
        <Typography variant="h6">Request your favourite songs!</Typography>
      </Grid>
      <Grid item>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <TextField
                size="small"
                fullWidth
                id="songName"
                name="songName"
                label="Song name"
                value={formik.values.songName}
                onChange={formik.handleChange}
                error={
                  formik.touched.songName && Boolean(formik.errors.songName)
                }
                helperText={formik.touched.songName && formik.errors.songName}
              />
            </Grid>
            <Grid item>
              <TextField
                size="small"
                fullWidth
                id="artist"
                name="artist"
                label="Artist"
                value={formik.values.artist}
                onChange={formik.handleChange}
                error={formik.touched.artist && Boolean(formik.errors.artist)}
                helperText={formik.touched.artist && formik.errors.artist}
              />
            </Grid>
            <Grid
              item
              container
              alignItems="flex-end"
              justifyContent="flex-end"
            >
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
export default MusicRequestForm
