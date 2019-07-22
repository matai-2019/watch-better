import React from 'react'
import PropTypes from 'prop-types'
import CastMember from './CastMember'
import { Grid, Container, Typography } from '@material-ui/core'
import { CastStyles } from '../style/muiStyles'

export default function Cast ({ cast }) {
  const classes = CastStyles()

  const extractCastmember = (arr) => {
    const cast = arr.splice(0, 6)
    return cast.map(castMember => (
      <Grid item key={castMember.name} xs="12" sm="2">
        <CastMember key={castMember.name} castMember={castMember} />
      </Grid>
    ))
  }

  return (
    <Container>
      <Typography variant="h6" component="h2" className={classes.title}>
        Top billed cast
      </Typography>
      <Grid container justify="center">
        {extractCastmember(cast)}
      </Grid>
    </Container>
  )
}

Cast.propTypes = {
  cast: PropTypes.array
}
