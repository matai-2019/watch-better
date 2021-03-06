import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Recommendations from './Recommendations'
import MovieTestDetails from './MovieTestDetails'
import MovieDetails from './MovieDetails'
import MovieList from './MovieList'
import Watchlist from './Watchlist'

export default function Home () {
  return (
    <>
      <Route path="/" exact component={Recommendations} />
      <Switch>
        <Route path="/" component={MovieTestDetails} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/movies/list" component={MovieList} />
        <Route path="/movies/watchlist" component={Watchlist} />
      </Switch>
    </>
  )
}
