import React from 'react'
import PropTypes from 'prop-types'
import { MovieDetailAvatarStyles } from '../style/muiStyles'

import { Avatar, Grid, Popover, Typography } from '@material-ui/core'

function MovieDetailAvatars ({ test }) {
  const classes = MovieDetailAvatarStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  function handlePopoverOpen (event) {
    setAnchorEl(event.currentTarget)
  }

  function handlePopoverClose () {
    setAnchorEl(null)
  }

  switch (test.testType) {
    case 'Bechdel Test':
      return (
        <div>
          <Grid item><Avatar className={classes.avatar} aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>B</Avatar></Grid>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{ paper: classes.paper }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography className={classes.movieTestText}>Bechdel Test</Typography>
          </Popover>
        </div>
      )
    case 'Rees Davies Test':
      return (
        <div>
          <Grid item><Avatar className={classes.avatar} aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>R</Avatar></Grid>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{ paper: classes.paper }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography className={classes.movieTestText}>Rees Davies Test</Typography>
          </Popover>
        </div>
      )
    case 'Ko Test':
      return (
        <div>
          <Grid item><Avatar className={classes.avatar} aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>K</Avatar></Grid>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{ paper: classes.paper }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography className={classes.movieTestText}>Ko Test</Typography>
          </Popover>
        </div>
      )
    case 'Landau Test':
      return (
        <div>
          <Grid item><Avatar className={classes.avatar} aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>L</Avatar></Grid>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{ paper: classes.paper }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography className={classes.movieTestText}>Landau Test</Typography>
          </Popover>
        </div>
      )
    case 'Feldman Test':
      return (
        <div>
          <Grid item><Avatar className={classes.avatar} aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>F</Avatar></Grid>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{ paper: classes.paper }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography className={classes.movieTestText}>Feldman Test</Typography>
          </Popover>
        </div>
      )
    default:
      return null
  }
}

export default MovieDetailAvatars

MovieDetailAvatars.propTypes = {
  test: PropTypes.object,
  testType: PropTypes.string
}
