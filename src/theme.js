import { createMuiTheme } from '@material-ui/core/styles'

const { palette, breakpoints } = createMuiTheme({
  palette: {},
})

export const theme = createMuiTheme({
  palette: palette,
  breakpoints: breakpoints,
  typography: {},
  overrides: {},
})
