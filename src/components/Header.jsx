import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography } from '@material-ui/core'
import { HeaderStyles } from '../style/muiStyles'

import NavBar from './NavBar'

const Header = (props) => {
  const classes = HeaderStyles(props)
  return (
    <Link to="/">
      <NavBar />
      <div className={classes.headerContent}>
        <Container maxWidth="sm">
          <Typography variant="h1" component="h2" align="center" gutterBottom>
          Watch Better
          </Typography>
          <Typography variant="h4" component="p" align="center" color="textSecondary" >
          A curated list of films, through a diversity lens
          </Typography>
        </Container>
      </div>
    </Link>
  )
}

export default Header
