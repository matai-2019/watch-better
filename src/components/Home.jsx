import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MovieTestDetails from './MovieTestDetails'
import Recommendations from './Recommendations'
import MovieDetails from './MovieDetails'
import MovieList from './MovieList'

export default function Home () {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MovieTestDetails} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/movies/list" component={MovieList} />
      </Switch>
      <Route path="/" exact component={Recommendations} />
    </>
  )
}
