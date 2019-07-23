import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import { register, isAuthenticated } from '../auth'
import { RegisterStyles } from '../style/muiStyles'

export default function Register (props) {
  const classes = RegisterStyles()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    register({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password
    }, {
      baseUrl: process.env.REACT_APP_BASE_API_URL // see .env and webpack.config.js
    })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <LockOutlinedIcon className={classes.lock}/>
        <Typography color="primary" component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                InputProps={{
                  className: classes.textfieldColor
                }}
                InputLabelProps={{
                  className: classes.textfieldColor
                }}
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
                value={form.firstName}
                className={classes.textfield}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                InputProps={{
                  className: classes.textfieldColor
                }}
                InputLabelProps={{
                  className: classes.textfieldColor
                }}
                name="lastName"
                autoComplete="lname"
                onChange={handleChange}
                value={form.lastName}
                className={classes.textfield}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                InputProps={{
                  className: classes.textfieldColor
                }}
                InputLabelProps={{
                  className: classes.textfieldColor
                }}
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={form.email}
                className={classes.textfield}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                InputProps={{
                  className: classes.textfieldColor
                }}
                InputLabelProps={{
                  className: classes.textfieldColor
                }}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={form.password}
                className={classes.textfield}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link className={classes.link} to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

Register.propTypes = {
  history: PropTypes.array
}
