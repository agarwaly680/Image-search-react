import React from 'react'
import { Grid } from '@mui/material'
import Image from './Image'
function Images({imgdata}) {
  return (
    <Grid container>
        {
            imgdata.map((images,ind) => (
                <Grid xs={3} item key={ind}>
                    <Image image={images}/>
                </Grid>
            ))
        }
    </Grid>
  )
}

export default Images