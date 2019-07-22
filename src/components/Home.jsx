import React from 'react'
import { Route, Switch } from 'react-router-dom'

import RecommendationsNew from './RecommendationsNew'
import MovieTestDetails from './MovieTestDetails'
// import Recommendations from './Recommendations'
import MovieDetails from './MovieDetails'
import MovieList from './MovieList'
import Watchlist from './Watchlist'

export default function Home () {
  return (
    <>
      <Route path="/" component={MovieTestDetails} />
      {/* <Route path="/" exact component={Recommendations} /> */}
      <Route path="/" exact component={RecommendationsNew} />
      <Switch>
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/movies/list" component={MovieList} />
        <Route path="/movies/watchlist" component={Watchlist} />
      </Switch>
    </>
  )
}
