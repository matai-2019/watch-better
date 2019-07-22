import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Container, Box, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@material-ui/core'

import { QuizQuestionStyles } from '../style/muiStyles'

const QuizQuestion = ({ id, question, test, handleChange, handleResult, title }, ...props) => {
  const classes = QuizQuestionStyles(props)

  return (
    <Container>
      {id === '1' && <Typography className={classes.intro} variant="h3" component="h1" gutterBottom>Test {`"${title}"`}:</Typography>}
      <Box boxShadow={0} elevation={0}>
        <FormControl component="fieldset">
          <FormLabel component="legend" class={classes.question}>{question}</FormLabel>
          <RadioGroup
            aria-label={test}
            onChange={(e) => handleChange(e.target.value, id)}
            name={id}
          >
            <FormControlLabel value="1" control={<Radio color="primary" />} label="Yes" />
            <FormControlLabel value="0" control={<Radio color="primary"/>} label="No" />
            <FormControlLabel value="-1" control={<Radio color="primary"/>} label="Unknown" />
          </RadioGroup>
        </FormControl>
      </Box>
      <hr/>
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
