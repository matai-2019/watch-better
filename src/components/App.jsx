import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { connect } from 'react-redux'
import { theme } from '../style/muiStyles'

import NotFound from './NotFound'
import NavBar from './NavBar'
import Footer from './Footer'
import Quiz from './Quiz'
import Register from './Register'
import Login from './Login'
import MovieTestDetails from './MovieTestDetails'
import Recommendations from './Recommendations'
import MovieDetails from './MovieDetails'
import MovieList from './MovieList'
import Watchlist from './Watchlist'
import ErrorMessage from './ErrorMessage'
// import WaitIndicator from './WaitIndicator'

const App = ({ error, pending }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path='/' component={NavBar} />
        <Route path="/" exact component={MovieTestDetails} />
        {error && <ErrorMessage />}
        {/* {pending && <WaitIndicator />} */}
        <Switch>
          <Route path="/" exact component={Recommendations} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/movies/list" component={MovieList} />
          <Route path="/movies/watchlist" component={Watchlist} />
          <Route path='/quiz' component={Quiz} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
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
