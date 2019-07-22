import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { connect } from 'react-redux'
import { theme } from '../style/muiStyles'

import NotFound from './NotFound'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import Quiz from './Quiz'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'

const App = ({ error, pending }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path='/' component={NavBar} />
        {error && <ErrorMessage />}
        {pending && <WaitIndicator />}
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/quiz' component={Quiz} />
          <Route component={NotFound} />
        </Switch>
        <Route path='/' component={Footer} />
      </Router>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ info: { error, pending } }) => {
  return {
    error,
    pending
  }
}

export default connect(mapStateToProps)(App)
