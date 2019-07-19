import React from 'react'
import { Container } from '@material-ui/core'

import { NoMatch } from '../style/muiStyles'

export default function NotFound () {
  const classes = NoMatch()
  return (
    <Container className={classes.text}>
      <span role="img" aria-label="camera">🎥</span> Page not found <span role="img" aria-label="camera">🎥</span>
    </Container>
  )
}
