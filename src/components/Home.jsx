import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import Recommendations from './Recommendations'
import MovieTestDetails from './MovieTestDetails'
import MovieDetails from './MovieDetails'
// import MovieList from './MovieList'

export default function Home () {
  return (
    <>
    <MovieTestDetails />
    <Router>
      <>
      <Switch>
        {/* <Route path='/' component={ Recommendations } /> */}
        <Route path='/movie/:id' component={ MovieDetails } />
        {/* <Route path='/movies/list' component={ MovieList } /> */}
      </Switch>
      </>
    </Router>
    </>
  )
}
