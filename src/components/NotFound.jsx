import React from 'react'
import { Container } from '@material-ui/core'

import { NoMatch } from '../style/muiStyles'

export default function NotFound () {
  const classes = NoMatch()
  return (
    <Container className={classes.text}>
      🎥 Page not found 🎥
    </Container>
  )
}
