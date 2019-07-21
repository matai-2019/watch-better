import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  Paper,
  Typography,
  Divider,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Button
} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

import { RecommendationStyles, theme } from '../style/muiStyles'
import { getMovies } from '../actions/movies'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)


const RecommendationsNew = ({ movies, info, dispatch }, ...props) => {
  const classes = RecommendationStyles(props)
  const [redirect, setRedirect] = useState()
  const [activeStep, setActiveStep] = React.useState(0)

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  const handleClick = id => () => {
    setRedirect(id)
  }

  const handleSeeAll = () => {
    setRedirect('see')
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = step => {
    setActiveStep(step)
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
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
  
      </AutoPlaySwipeableViews>
    )
  )
}

export default RecommendationsNew
