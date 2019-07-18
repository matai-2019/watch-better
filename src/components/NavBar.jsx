import React from 'react'
import { AppBar, Toolbar, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { NavBarStyles } from '../style/muiStyles'

export default function NavBar () {
  const classes = NavBarStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'Search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}
