import React from 'react'
import PropTypes from 'prop-types'
import { MovieListItemStyles } from '../style/muiStyles'

import { Avatar, Box } from '@material-ui/core'

function Avatars ({ test }) {
  const classes = MovieListItemStyles()

  switch (test.testType) {
    case 'Bechdel Test':
      return <Box><Avatar className={classes.avatar}>B</Avatar></Box>
    case 'Rees Davies Test':
      return <Box><Avatar className={classes.avatar}>R</Avatar></Box>
    case 'Ko Test':
      return <Box><Avatar className={classes.avatar}>K</Avatar></Box>
    case 'Landau Test':
      return <Box><Avatar className={classes.avatar}>L</Avatar></Box>
    case 'Feldman Test':
      return <Box><Avatar className={classes.avatar}>F</Avatar></Box>
    default:
      return null
  }
}

export default Avatars

Avatars.propTypes = {
  test: PropTypes.object,
  testType: PropTypes.string
}
