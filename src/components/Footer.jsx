import React from 'react'
import { Container, InputBase, Typography } from '@material-ui/core'
import { FooterStyles } from '../style/muiStyles'
import SearchIcon from '@material-ui/icons/Search'

const Footer = (props) => {
  const classes = FooterStyles(props)
  return (
    <>
    <div className={classes.footerContent}>
      <Container maxWidth="sm">
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
        <div className={classes.socialButtons}>
          {/* <a className={classes.fb} href="https://icons8.com/icon/118490/facebook">Facebook icon by Icons8</a> */}
          <img src="https://img.icons8.com/material/24/000000/facebook-new.png" />
          {/* <a className={classes.message} href="https://icons8.com/icon/20241/group-message">Group Message icon by Icons8</a> */}
          <img src="https://img.icons8.com/material/24/000000/message-group.png" />
        </div>
        <Typography variant="h8" component="p" align="center" gutterBottom>
          An Enspiral Dev Academy project created by Anisha, DavidB, Jared, Jennie, Joanna & Raaya ©.
        </Typography>
      </Container>
    </div>
    </>
  )
}

export default Footer
