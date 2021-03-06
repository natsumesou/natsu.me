import * as React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { Header } from '@/components/organisms/Header'
import { theme } from '../theme'
import { Box, styled } from '@material-ui/core'

const ContentBox = styled(Box)({})

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ContentBox>{children}</ContentBox>
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => <App>{element}</App>
