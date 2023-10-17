import { LocationOn, Notifications } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'

function App() {
  return (
    <>
      {/* <Toolbar  /> */}
      <AppBar sx={{ backgroundColor: 'transparent' }} color='primary' elevation={0}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Button size='small' startIcon={<LocationOn color='secondary' fontSize='small' />}>Lomé, Maritime</Button>
          <IconButton>
            <Notifications color='primary' />
          </IconButton>
        </Stack>
      </AppBar>

    </>
  )
}

export default App
