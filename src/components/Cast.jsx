import React from 'react'
import PropTypes from 'prop-types'
import CastMember from './CastMember'
import { Grid, Container, Typography } from '@material-ui/core'
import { CastStyles } from '../style/muiStyles'

export default function Cast ({ cast }) {
  const classes = CastStyles()

  return (
    <Container>
      <Typography variant="h6" component="h2" className={classes.title}>
        Top Billed Cast
      </Typography>
      <Grid container justify="center">
        {cast &&
          cast.slice(0, 6)
            .map(castMember => (
              <Grid item key={castMember.name} xs={12} sm={2}>
                <CastMember key={castMember.name} castMember={castMember} />
              </Grid>
            ))
        }
      </Grid>
    </Container>
  )
}

Cast.propTypes = {
  cast: PropTypes.array
}
