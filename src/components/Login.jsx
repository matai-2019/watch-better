import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { Formik, Form } from 'formik'
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  FormControl,
  FormHelperText
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import { RegisterStyles } from '../style/muiStyles'
import { isAuthenticated, signIn } from '../auth'
import { setErrorMessage } from '../actions/errorMessage'

const Login = ({ dispatch, history }, ...props) => {
  const classes = RegisterStyles()

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    password: Yup.string().required('Please enter your password')
  })

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <LockOutlinedIcon className={classes.lock} />
        <Typography component="h1" color="primary" variant="h5">
          Sign in
        </Typography>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            signIn(
              {
                email: values.email,
                password: values.password
              },
              {
                baseUrl: process.env.REACT_APP_BASE_API_URL
              }
            )
              .then(token => {
                actions.setSubmitting(false)
                if (isAuthenticated()) {
                  history.push('/')
                }
              })
              .catch(err => {
                if (err.message === 'Bad Request') {
                  actions.setSubmitting(false)
                  dispatch(
                    setErrorMessage({
                      message: 'Please enter a valid username and password'
                    })
                  )
                } else {
                  actions.setSubmitting(false)
                  dispatch(setErrorMessage(err))
                }
              })
          }}
          render={({
            errors,
            handleChange,
            handleBlur,
            touched,
            isSubmitting,
            values
          }) => (
            <Form>
              <FormControl error className={classes.form}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    className: classes.textfieldColor
                  }}
                  InputLabelProps={{
                    className: classes.textfieldColor
                  }}
                  className={classes.textfield}
                />
                {errors.email && touched.email && (
                  <FormHelperText>{errors.email}</FormHelperText>
                )}
                <TextField
                  variant="outlined"
                  margin="normal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    className: classes.textfieldColor
                  }}
                  InputLabelProps={{
                    className: classes.textfieldColor
                  }}
                  className={classes.textfield}
                />
                {errors.password && touched.password && (
                  <FormHelperText>{errors.password}</FormHelperText>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  type="submit"
                  disabled={isSubmitting}
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
              </FormControl>
            </Form>
          )}
        />
      </div>
    </Container>
  )
}

Login.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect()(Login)
