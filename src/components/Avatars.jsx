import React from 'react'
import PropTypes from 'prop-types'
import { MovieListItemStyles } from '../style/muiStyles'

import { Avatar, Grid } from '@material-ui/core'

function Avatars ({ test }) {
  const classes = MovieListItemStyles()

  switch (test.testType) {
    case 'Bechdel Test':
      return <Grid item><Avatar className={classes.greenAvatar}>B</Avatar></Grid>
    case 'Rees Davies Test':
      return <Grid item><Avatar className={classes.orangeAvatar}>RD</Avatar></Grid>
    case 'Ko Test':
      return <Grid item><Avatar className={classes.purpleAvatar}>K</Avatar></Grid>
    case 'Landau Test':
      return <Grid item><Avatar className={classes.blueAvatar}>L</Avatar></Grid>
    case 'Feldman Test':
      return <Grid item><Avatar className={classes.redAvatar}>F</Avatar></Grid>
    default:
      return null
  }
}

export default Avatars

Avatars.propTypes = {
  test: PropTypes.object,
  testType: PropTypes.string
}
