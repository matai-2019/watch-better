import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  FormHelperText,
  FormControl
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import { register, isAuthenticated } from '../auth'
import { RegisterStyles } from '../style/muiStyles'
import { setErrorMessage } from '../actions/errorMessage'
import { getLoggedUser } from '../actions/loggedUser'

const Register = ({ dispatch, history }, ...props) => {
  const classes = RegisterStyles()

  const validationSchema = Yup.object({
    firstname: Yup.string().required('A first name is required for signup'),
    lastname: Yup.string().required('A last name is required for signup'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('An email address is required for signup'),
    password: Yup.string()
      .required('Please enter a password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Password should be at least eight characters, at least one letter, one number and one special character'
      )
  })

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <LockOutlinedIcon className={classes.lock} />
        <Typography color="primary" component="h1" variant="h5">
          Sign Up
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            register(
              {
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
                password: values.password
              },
              {
                baseUrl: process.env.REACT_APP_BASE_API_URL
              }
            )
              .then(token => {
                dispatch(getLoggedUser(values.email))
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
                      message: 'That email address is already registered. Please sign in or register with another email address.'
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
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstname"
                      variant="outlined"
                      required
                      fullWidth
                      InputProps={{
                        className: classes.textfieldColor
                      }}
                      InputLabelProps={{
                        className: classes.textfieldColor
                      }}
                      id="firstname"
                      label="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstname}
                      className={classes.textfield}
                    />
                    {errors.firstname && touched.firstname && (
                      <FormHelperText>{errors.firstname}</FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastname"
                      label="Last Name"
                      InputProps={{
                        className: classes.textfieldColor
                      }}
                      InputLabelProps={{
                        className: classes.textfieldColor
                      }}
                      name="lastname"
                      autoComplete="lname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastname}
                      className={classes.textfield}
                    />
                    {errors.lastname && touched.lastname && (
                      <FormHelperText>{errors.lastname}</FormHelperText>
                    )}
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
                      onBlur={handleBlur}
                      value={values.email}
                      className={classes.textfield}
                    />
                    {errors.email && touched.email && (
                      <FormHelperText>{errors.email}</FormHelperText>
                    )}
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
                      onBlur={handleBlur}
                      value={values.password}
                      className={classes.textfield}
                    />
                    {errors.password && touched.password && (
                      <FormHelperText>{errors.password}</FormHelperText>
                    )}
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={isSubmitting}
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
              </FormControl>
            </Form>
          )}
        />
      </div>
    </Container>
  )
}

Register.propTypes = {
  history: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect()(Register)
