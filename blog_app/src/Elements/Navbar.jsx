import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static"sx={{ backgroundColor: 'purple'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blog
        </Typography>
        <Button color='inherit'  ><Link style={{color:'white', textDecoration:'none'}} to ={'/addpost'}> Add post</Link></Button>
        <Button color='inherit' > <Link style={{color:'white', textDecoration:'none'}} to ={'/view'}> View</Link></Button>
        <Button color='inherit' ><Link style={{color:'white', textDecoration:'none'}} to ={'/myprofile'}>  My Profile</Link></Button>
        <Button color='inherit' ><Link style={{color:'white', textDecoration:'none'}} to ={'/'}>  Logout</Link></Button>
        
     </Toolbar>
    </AppBar>
  </Box>
      

  )
}

export default Navbar
