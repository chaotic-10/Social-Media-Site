import React from 'react'
import {Stack,Box} from "@mui/material"
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import RightBar from './components/RightBar'
import Add from './components/Add'
import { ThemeProvider } from '@emotion/react'
import { useState } from 'react'
import { createTheme } from '@mui/system'
 const App = () => {
  const [mode, setMode] = useState("dark");

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });
  return (
    // <ThemeProvider theme={darkTheme}>     
    <Box> 
    <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between" >
        <SideBar/>
        <Feed/>
        <RightBar/>
    </Stack>
    <Add/>
    </Box>
    // </ThemeProvider>
  )
}

export default App