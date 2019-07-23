import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import { RegisterStyles } from '../style/muiStyles'
import { isAuthenticated, signIn } from '../auth'

export default function Login (props) {
  const classes = RegisterStyles()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = e => {
    e.preventDefault()
    signIn(
      {
        email: form.email,
        password: form.password
      },
      {
        baseUrl: process.env.REACT_APP_BASE_API_URL // see .env and webpack.config.js
      }
    ).then(token => {
      if (isAuthenticated()) {
        props.history.push('/')
      }
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <LockOutlinedIcon className={classes.lock}/>
        <Typography component="h1" color="primary" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={form.email}
            onChange={handleChange}
            InputProps={{
              className: classes.textfieldColor
            }}
            InputLabelProps={{
              className: classes.textfieldColor
            }}
            className={classes.textfield}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            InputProps={{
              className: classes.textfieldColor
            }}
            InputLabelProps={{
              className: classes.textfieldColor
            }}
            className={classes.textfield}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link className={classes.link} to="/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

Login.propTypes = {
  history: PropTypes.object
}
