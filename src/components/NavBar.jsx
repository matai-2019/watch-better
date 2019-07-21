import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, TextField, Grid, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { NavBarStyles } from '../style/muiStyles'

export default function NavBar (props) {
  const classes = NavBarStyles(props)
  return (
    <Link to="/">
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.logo}>
              WB
            </Typography>
            <Typography className={classes.tagline}>
              CURATION THROUGH A LENS OF DIVERSITY
            </Typography>
            <Button className={classes.navButton}><Link to="/quiz" className={classes.link}>Test A Movie</Link></Button>
            <div className={classes.search}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <SearchIcon className={classes.searchIcon}/>
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="Search" style={{ width: '260px' }} InputProps={{ className: classes.multilineColor }} />
                </Grid>
              </Grid>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </Link>
  )
}
