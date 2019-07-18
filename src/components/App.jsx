import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { connect } from 'react-redux'
import { theme } from '../style/muiStyles'
import MovieList from './MovieList'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path='/' component={MovieList} />
      </Router>
    </ThemeProvider>
  )
}

export default connect()(App)
