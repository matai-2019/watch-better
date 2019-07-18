import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { MovieListItemStyles } from '../style/muiStyles'

class MovieListItem extends React.Component {

  classes = MovieListItemStyles(this.props)

  render () {
    return (
      <Paper className={this.classes.paper} elevation={3}>
        <Typography variant="h5" component="h5">
          <p>{this.props.movie.name}</p>
        </Typography>
      </Paper>
    )
  }
}

MovieListItem.propTypes = {
  movie: PropTypes.object
}

export default MovieListItem
