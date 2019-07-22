import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  LockOutlinedIcon,
  Typography,
  Container
} from '@material-ui/core'

import { RegisterStyles } from '../style/muiStyles'
import { isAuthenticated, signIn, logOff } from '../auth'

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

  const handleClick = (e) => {
    e.preventDefault()
    signIn({
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
        <Avatar className={classes.avatar}>
          {isAuthenticated() && <LockOutlinedIcon />}
        </Avatar>
        <Typography component="h1" variant="h5">
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
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register">
                {"Don't have an account? Sign Up"}
              </Link>
              <Button onClick={logOff}> LogOff</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
