import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Card, CardActionArea, CardMedia } from '@material-ui/core'

import { RecommendationsStyles } from '../style/muiStyles'
import AvatarsHover from './AvatarsHover'

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
          </CardMedia>
          <div className={classes.testIcons}>
            {props.movieTests.map(x => {
              if (x.result) return <AvatarsHover key={x.testType} test={x} />
              else return null
            })
            }
          </div>
        </CardActionArea>
      </Card >
    </Link>
  )
}

RecommendationDetail.propTypes = {
  movieTests: PropTypes.array,
  movie: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number
}

export default RecommendationDetail
