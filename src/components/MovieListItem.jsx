import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { MovieListItemStyles } from '../style/muiStyles'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Button, Divider,
  Typography,
  Grid
} from '@material-ui/core'

import Avatars from './Avatars'

const MovieListItem = (props) => {
  const classes = MovieListItemStyles(props)

  const [redirect, setRedirect] = useState()

  const handleClick = () => {
    setRedirect(props.movie.id)
  }

  const renderRedirect = () => {
    if (redirect) { return <Redirect push to={`/movie/${redirect}`} /> }
  }

  return (
    <>
        {renderRedirect()}
      <ExpansionPanel spacing={2} className={classes.panel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.arrowIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.summary} >
          <Grid container alignItems="center">
            <Grid item xs={9}>
              <Typography variant="h5" component="h5" className={classes.text}><p>{props.movie.title}</p></Typography>
            </Grid>
            {props.movie.movieTests.map(x => {
              if (x.result) return <Avatars key={x.testType} test={x} />
              else return null
            })
            }
          </Grid>
        </ExpansionPanelSummary>
        <Divider className={classes.divider} />
        <ExpansionPanelDetails className={classes.detailsPanel}>
          <img className={classes.img} src={`https://image.tmdb.org/t/p/w200${props.movie.image}`} alt='poster thumbnail'></img>
          {/* <Typography className={classes.summaryText} variant="p" component="p">
            <p>{props.movie.summary}</p>
          </Typography> */}
        </ExpansionPanelDetails>
        <ExpansionPanelActions className={classes.moreButton}>
          <Button size="medium" color="secondary" onClick={handleClick}>
            MORE
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
      <div className={classes.space}></div>
    </>
  )
}

MovieListItem.propTypes = {
  movie: PropTypes.object
}

export default MovieListItem
