import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { CastMemberStyles } from '../style/muiStyles'

export default function CastMember ({ castMember }) {
  const classes = CastMemberStyles()
  return (
    <Card key={castMember.name} className={classes.card}>
      <CardMedia
        className={classes.media}
        image={`https://image.tmdb.org/t/p/w185${castMember.image}`}
        title={castMember.name}
      />
      <CardContent>
        <Typography variant="body1" component="h3">
          {castMember.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

CastMember.propTypes = {
  castMember: PropTypes.object
}
