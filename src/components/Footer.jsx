import React from 'react'
import { Container, Typography } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import { FooterStyles } from '../style/muiStyles'

const Footer = (props) => {
  const classes = FooterStyles(props)

  const text = 'A project created at Enspiral Dev Academy by\:
  Anisha Dhana, David Brown, Raaya Pathare, Joanna Klimas, Jared Tasker & amp; Jennie Watson.'

  return (
    <>
      <Container maxWidth="xl" className={classes.footerContent}>
        <div className={classes.socialButtons}>
          <Icon>star</Icon>
          <Icon>copyright</Icon>
        </div>
        <Typography className={classes.edaText} component="p" align="center" gutterBottom>
          A project created at Enspiral Dev Academy by:
            <span style={{ whiteSpace: 'pre-line' }}></span>
          Anisha Dhana, David Brown, Raaya Pathare, Joanna Klimas, Jared Tasker &amp; Jennie Watson.
          </Typography>
        <Typography className={classes.footerText}>
          WATCH BETTER ©
          </Typography>
      </Container>
    </>
  )
}
// &amp;
export default Footer
