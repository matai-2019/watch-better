import React from 'react'
// import PropTypes from 'prop-types'
import { Rating } from '@material-ui/lab'
import { TextField, Box, Typography } from '@material-ui/core'

import { CommentFormStyles } from '../style/muiStyles'

const CommentForm = () => {
  const classes = CommentFormStyles()

  return (
    <>
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography className={classes.text} component="legend">Rate the movie:</Typography>
      <Rating
        name="simple-controlled"
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
    </Box>
    <TextField
      id="comment"
      label="comment"
      multiline
      rowsMax="10"
      // value={values.multiline}
      // onChange={handleChange('multiline')}
      className={classes.comment}
      margin="normal"
      variant="outlined"
    />
    </>
  )
}

export default CommentForm

CommentForm.propTypes = {

}
