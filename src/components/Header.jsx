import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { HeaderStyles } from '../style/muiStyles'

const Header = (props) => {
  const classes = HeaderStyles(props)
  return (
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
  )
}

export default Header
