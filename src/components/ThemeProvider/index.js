import React from 'react'
import PropTypes from 'prop-types'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import blueGrey from '@material-ui/core/colors/blueGrey'
import CssBaseline from '@material-ui/core/CssBaseline'

// A theme with custom primary and secondary color.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
  },
})

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default ThemeProvider
