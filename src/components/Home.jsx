import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Recommendations from './Recommendations'
import MovieTestDetails from './MovieTestDetails'
import MovieDetails from './MovieDetails'
import MovieList from './MovieList'

export default function Home () {
  return (
    <>
      <Route path="/" exact component={Recommendations} />
      <Route path="/" component={MovieTestDetails} />
      <Switch>
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/movies/list" component={MovieList} />
      </Switch>
    </>
  )
}
