import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core/'

import { RecommendationsStyles } from '../style/muiStyles'
import { getMovies } from '../actions/movies'
import RecommendationDetail from './RecommendationDetail'

const Recommendations = ({ movies, info, dispatch }, ...props) => {
  const classes = RecommendationsStyles(props)
  const [redirect, setRedirect] = useState()
  const handleOnDragStart = e => e.preventDefault()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  const handleClick = id => () => {
    setRedirect(id)
  }

  const handleSeeAll = () => {
    setRedirect('see')
  }

  const responsive = {
    1024: {
      items: 3
    },
    464: {
      items: 2
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
      <>
        <div classes={classes.carousel}>
          {redirect && renderRedirect()}
          <AliceCarousel
            responsive={responsive}
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
          <Button variant="outlined" color="primary" className={classes.button} onClick={handleSeeAll}>SEE ALL MOVIES</Button>
        </div>
      </>
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
