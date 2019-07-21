import React from 'react'
import { AppBar, Toolbar, Typography, Grid, Button, Link } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { NavBarStyles } from '../style/muiStyles'
import Search from './Search';

export default function NavBar (props) {
  const classes = NavBarStyles(props)
  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.logo}>
              WB
            </Typography>
            <Typography className={classes.tagline}>
              CURATION THROUGH A LENS OF DIVERSITY
            </Typography>
            <Button className={classes.navButton}><Link to="/quiz" style={{ textDecoration: 'none' }}>Test A Movie</Link></Button>
            <div className={classes.search}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <SearchIcon className={classes.searchIcon}/>
                </Grid>
                <Grid item>
                  <Search />
                </Grid>
              </Grid>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}
