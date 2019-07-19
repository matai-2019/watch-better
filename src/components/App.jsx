import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { connect } from 'react-redux'
import { theme } from '../style/muiStyles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>

      </Router>
    </ThemeProvider>
  )
}

export default connect()(App)
