import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core'

import { RecommendationsStyles } from '../style/muiStyles'
import Avatars from './Avatars'

const RecommendationDetail = (props) => {
  const classes = RecommendationsStyles(props)
  return (
    <Link to={`/movie/${props.id}`} style={{ textDecoration: 'none' }}>
      <Card
        onClick={props.onClick((props.id))}
        key={props.id}
        className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}>
            <div className={classes.testIcons}>
              {props.movie.movieTests.map(x => {
                if (x.result) return <Avatars key={x.testType} test={x} />
                else return null
              })
              }
            </div>
          </CardMedia>
          <CardContent>
            <Typography variant="body1" component="h3">
              {props.title}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card >
    </Link>
  )
}

RecommendationDetail.propTypes = {
  movie: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number
}

export default RecommendationDetail
