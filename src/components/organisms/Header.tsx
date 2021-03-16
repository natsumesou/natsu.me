import { AppBar, Toolbar } from '@material-ui/core'
import * as React from 'react'

// markup
export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense"></Toolbar>
    </AppBar>
  )
}
