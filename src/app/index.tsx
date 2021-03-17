import React from 'react'
import { Box, CssBaseline, styled, ThemeProvider } from '@material-ui/core'
import { theme } from '@/theme'
import { Header } from '@/components/organisms/Header'

const ContentBox = styled(Box)({})

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <ContentBox>{children}</ContentBox>
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => <App>{element}</App>
