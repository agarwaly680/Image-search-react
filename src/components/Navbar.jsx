import React from 'react'
import { AppBar,Toolbar, Typography,styled } from '@mui/material'
import { Collections } from '@mui/icons-material'

const Header = styled(AppBar)`
    background:#445A6F
`
function Navbar() {
  return (
    <Header position='static'>
        <Toolbar>
        <Collections />
        <Typography variant='h5'>Image Finder</Typography>
        </Toolbar>
    </Header>
  )
}

export default Navbar