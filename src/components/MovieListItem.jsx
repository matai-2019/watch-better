import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
// import MovieDetails from './MovieDetails'
// ^^ button 'MORE' in the Expansion Panel Summary should be a link to the MovieDetails component
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { MovieListItemStyles } from '../style/muiStyles'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions, Button, Divider, Typography } from '@material-ui/core'

const MovieListItem = (props) => {

  const classes = MovieListItemStyles(props)
  return (
    <>
      <ExpansionPanel spacing={2} className={classes.panel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.arrowIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.summary}>
          <Typography variant="h5" component="h5" className={classes.text}><p>{props.movie.name}</p></Typography>
        </ExpansionPanelSummary>
        <Divider className={classes.divider} />
        <ExpansionPanelDetails className={classes.detailsPanel}>
          <img className={classes.img} src={`/images/${props.movie.image}`}></img>
          <Typography className={classes.summaryText} variant="p" component="p">
            <p>{props.movie.summary}</p>
          </Typography>
          
        </ExpansionPanelDetails>
        <ExpansionPanelActions className={classes.moreButton}>
            <Button size="medium" color="secondary">
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
