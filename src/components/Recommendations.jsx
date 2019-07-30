import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { RecommendationsStyles } from '../style/muiStyles'
import { getMovies } from '../actions/movies'
import RecommendationDetail from './RecommendationDetail'
import { getWatchList } from '../actions/watchlist'
import { getSeenList } from '../actions/seenList'
import { isAuthenticated } from '../auth'

const Recommendations = ({ movies, info, dispatch }, ...props) => {
  const classes = RecommendationsStyles(props)
  const [redirect, setRedirect] = useState()
  const handleOnDragStart = e => e.preventDefault()

  useEffect(() => {
    dispatch(getMovies())
    isAuthenticated() && dispatch(getWatchList())
    isAuthenticated() && dispatch(getSeenList())
  }, [dispatch])

  const handleClick = id => () => {
    setRedirect(id)
  }

  const responsiveness = {
    1919: {
      items: 4
    },
    1024: {
      items: 3
    },
    1023: {
      items: 2
    },
    464: {
      items: 2
    },
    463: {
      items: 1
    },
    0: {
      items: 1
    }
  }

  const renderRedirect = () => {
    if (redirect === 'see') {
      return <Redirect push to={'/movies/list'} />
    } else if (redirect) {
      return <Redirect push to={`/movie/${redirect}`} />
    }
  }

  return (
    !info.pending && (
      <div classes={classes.carousel}>
        {redirect && renderRedirect()}
        <AliceCarousel
          responsive={responsiveness}
          autoPlayInterval={3300}
          duration={500}
          autoPlayDirection="ltr"
          autoPlay={true}
          fadeOutAnimation={false}
          mouseDragEnabled={true}
          dotsDisabled={true}
          buttonsDisabled={true}>
          {movies
            .filter(movie => movie.recommended)
            .map(movie => (
              <RecommendationDetail
                onDragStart={handleOnDragStart}
                movieTests={movie.movieTests}
                id={movie.id}
                key={movie.id}
                onClick={handleClick}
                image={`https://image.tmdb.org/t/p/w500${movie.image}`}
                title={movie.title}
                year={movie.releaseDate} />
            ))}
        </AliceCarousel>
      </div>
    )
  )
}

function mapStateToProps ({ movies, info }) {
  return {
    movies,
    info
  }
}

Recommendations.propTypes = {
  dispatch: PropTypes.func,
  movies: PropTypes.array,
  info: PropTypes.object
}

export default connect(mapStateToProps)(Recommendations)
