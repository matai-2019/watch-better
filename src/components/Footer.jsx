import React from 'react'
import { Container, Typography } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import { FooterStyles } from '../style/muiStyles'

const Footer = (props) => {
  const classes = FooterStyles(props)
  return (
    <>
        <Container maxWidth="xl" className={classes.footerContent}>
          <div className={classes.socialButtons}>
            <Icon>star</Icon>
            <Icon>copyright</Icon>
          </div>
          <Typography className={classes.edaText} component="p" align="center" gutterBottom>
            An Enspiral Dev Academy project created by Anisha, DavidB, Jared, Jennie, Joanna &amp; Raaya
          </Typography>
          <Typography className={classes.footerText}>
            Watch Better ©
          </Typography>
        </Container>
    </>
  )
}

export default Footer
