import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { connect } from 'react-redux'
import { theme } from '../style/muiStyles'

// import MovieList from './MovieList'
import NotFound from './NotFound'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path='/' component={Header} />
        <Switch>
          <Route path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Route path='/' component={Footer} />
      </Router>
    </ThemeProvider>
  )
}

export default connect()(App)
