import React from 'react'
import PropTypes from 'prop-types'
import CastMember from './CastMember'
import { Grid } from '@material-ui/core'
import { CastStyles } from '../style/muiStyles'

export default function Cast ({ cast }) {
  const classes = CastStyles()

  const extractCastmember = (cast) => {
    return cast.map(castMember => (
      <Grid key={castMember.name}>
        <CastMember key={castMember.name} castMember={castMember} />
      </Grid>
    ))
  }

  return (
    <div className={classes.container}>
      <Grid container>
        {extractCastmember(cast)}
      </Grid>
    </div>
  )
}

Cast.propTypes = {
  cast: PropTypes.array
}
