import React from 'react'
import PropTypes from 'prop-types'
import { MovieListItemStyles } from '../style/muiStyles'

import { Avatar, Grid } from '@material-ui/core'

function Avatars ({ test }) {
  const classes = MovieListItemStyles()

  switch (test.testType) {
    case 'Bechdel Test':
      return <Grid item><Avatar className={classes.avatar}>B</Avatar></Grid>
    case 'Rees Davies Test':
      return <Grid item><Avatar className={classes.avatar}>R</Avatar></Grid>
    case 'Ko Test':
      return <Grid item><Avatar className={classes.avatar}>K</Avatar></Grid>
    case 'Landau Test':
      return <Grid item><Avatar className={classes.avatar}>L</Avatar></Grid>
    case 'Feldman Test':
      return <Grid item><Avatar className={classes.avatar}>F</Avatar></Grid>
    default:
      return null
  }
}

export default Avatars

Avatars.propTypes = {
  test: PropTypes.object,
  testType: PropTypes.string
}
