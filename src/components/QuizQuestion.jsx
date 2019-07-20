import React from 'react'
import PropTypes from 'prop-types'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@material-ui/core'

const QuizQuestion = ({ id, question, test, handleChange }) => {
  return id === 17 ? <>
      <FormControl component="fieldset">
        <FormLabel component="legend">{question}</FormLabel>
        <RadioGroup
          aria-label={test}
          onChange={(e) => handleChange(e.target.value, id)}
          name={id}
        >
          <FormControlLabel value="1" control={<Radio />} label="Yes" />
          <FormControlLabel value="0" control={<Radio />} label="No" />
          <FormControlLabel value="0" control={<Radio />} label="Unknown" />
        </RadioGroup>
      </FormControl>
      <br/>
      <Button/>
    </>
    : <>
      <FormControl component="fieldset">
        <FormLabel component="legend">{question}</FormLabel>
        <RadioGroup
          aria-label={test}
          onChange={(e) => handleChange(e.target.value, id)}
          name={id}
        >
          <FormControlLabel value="1" control={<Radio />} label="Yes" />
          <FormControlLabel value="0" control={<Radio />} label="No" />
          <FormControlLabel value="0" control={<Radio />} label="Unknown" />
        </RadioGroup>
      </FormControl>
      <br/>
    </>
}

QuizQuestion.propTypes = {
  id: PropTypes.string,
  question: PropTypes.string,
  test: PropTypes.string,
  handleChange: PropTypes.func
}

export default QuizQuestion
