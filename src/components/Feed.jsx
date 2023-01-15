import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {SideBar} from './'
const Feed = () => {
  return (
    <Stack sx={{flexDirection: {sx: "column", md: 'row'}}}>
      <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        <SideBar/>
        <Typography variant='body2' sx={{mt: 1.5, color: '#fff'}}>
          <small>
            Copyright 2023 OcCodes
          </small>
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography 
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{color: 'white'}}
        >
          New&nbsp;
          <span style={{color: "#f31503"}}>videos</span>
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed