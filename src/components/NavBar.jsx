import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, Grid, Button, Badge } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

import { NavBarStyles } from '../style/muiStyles'
import Search from './Search'
import { isAuthenticated, logOff } from '../auth'

const StyledBadge = withStyles(() => ({
  badge: { top: '20%', right: '-7%' }
}))(Badge)

function NavBar (props) {
  const classes = NavBarStyles(props)
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={`${classes.link} ${classes.logo}`}>
            <Typography className={classes.logo} >
              WB
            </Typography>
          </Link>
          <Link to="/" className={`${classes.link} ${classes.tagline}`}>
            <Typography className={classes.tagline}>
              THE DIVERSE MOVIE DATABASE
            </Typography>
          </Link>
          <Link to="/movies/list" className={classes.link}><Button className={classes.navButton2}>See All Movies</Button></Link>
          {isAuthenticated() && <Link to="/movies/watchlist" className={classes.link}>
            <div className={classes.divide}>
              <StyledBadge color="primary" badgeContent={props.watchlist.length} className={classes.margin}>
                <Button className={classes.watchButton}>Watchlist</Button>
              </StyledBadge>
            </div>
          </Link>}
          <Link to="/quiz" className={classes.link}><Button className={classes.navButton}>Test A Movie</Button></Link>
          <div className={classes.search}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <SearchIcon className={classes.searchIcon} />
              </Grid>
              <Grid item>
                <Search className={classes.search} />
              </Grid>
            </Grid>
          </div>
          {isAuthenticated() ? <div className={classes.loginButton}>
            <Link to="/" onClick={logOff} >
              <img src="/icons/logout.svg" alt="" />
            </Link>
          </div>
            : <div className={classes.loginButton}>
              <Link to="/login">
                <img src="/icons/login.svg" alt="" />
              </Link>
            </div>}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = ({ watchlist }) => {
  return {
    watchlist
  }
}

export default connect(mapStateToProps)(NavBar)

NavBar.propTypes = {
  watchlist: PropTypes.array
}
