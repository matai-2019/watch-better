import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from '@material-ui/core'

import { clearErrorMessage } from '../actions/errorMessage'

const Transition = (props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
}

const slideIn = React.forwardRef(Transition)

const ErrorMessage = ({ error, dispatch }, ...props) => {
  const handleClose = () => {
    dispatch(clearErrorMessage())
  }

  return (
    <div>
      <Dialog
        open={error}
        TransitionComponent={slideIn}
        keepMounted
        onClose={handleClose}
        aria-labelledby="error-message"
        aria-describedby="error-dialog-slide-description"
      >
        <DialogTitle id="error-message">An Error Has Occured</DialogTitle>
        <DialogContent>
          <DialogContentText id="error-dialog-slide-description">
            {error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapStateToProps = ({ info: { error } }) => {
  return {
    error
  }
}

export default connect(mapStateToProps)(ErrorMessage)

ErrorMessage.propTypes = {
  error: PropTypes.string,
  dispatch: PropTypes.func
}
