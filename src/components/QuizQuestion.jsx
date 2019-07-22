import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Container, Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@material-ui/core'

import { QuizStyles } from '../style/muiStyles'

const QuizQuestion = ({ id, question, test, handleChange, handleResult, title }, ...props) => {
  const classes = QuizStyles(props)

  return (
    <Container>
      {id === '1' && <Typography variant="h2" gutterBottom>Test {`"${title}"`}:</Typography>}
      <Paper className={classes.content}>
        <FormControl component="fieldset">
          <FormLabel className={classes.question} component="legend">{question}</FormLabel>
          <RadioGroup
            aria-label={test}
            onChange={(e) => handleChange(e.target.value, id)}
            name={id}
          >
            <FormControlLabel value="1" control={<Radio />} label="Yes" />
            <FormControlLabel value="0" control={<Radio />} label="No" />
            <FormControlLabel value="-1" control={<Radio />} label="Unknown" />
          </RadioGroup>
        </FormControl>
      </Paper>
      <br/>
      {id === '17' && <Button variant="outlined" color="primary" onClick={handleResult}>Submit</Button> }
    </Container>
  )
}

QuizQuestion.propTypes = {
  id: PropTypes.string,
  question: PropTypes.string,
  test: PropTypes.string,
  handleChange: PropTypes.func,
  handleResult: PropTypes.func,
  title: PropTypes.string
}

export default QuizQuestion
