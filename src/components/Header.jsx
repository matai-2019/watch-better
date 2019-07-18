import React from 'react'
import { Paper } from '@material-ui/core'
import { HeaderStyles } from '../style/muiStyles'

const Header = (props) => {
  const classes = HeaderStyles(props)
  return (
    <Paper className={classes.paper}>
      <h1>Watch Better</h1>
    </Paper>
  )
}

export default Header
