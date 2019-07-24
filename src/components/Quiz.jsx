import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Container, TextField, Button, Typography } from '@material-ui/core'

import MovieTestDetails from './MovieTestDetails'
import { QuizStyles } from '../style/muiStyles'
import QuizQuestion from './QuizQuestion'
import data from '../data/quizQuestions.js'
import { clearAnswers } from '../actions/quizAnswer'

const Quiz = (props) => {
  const classes = QuizStyles(props)
  const [title, setTitle] = useState('')
  const [displayAnswer, setDisplayAnswer] = useState(false)
  const [disable, setActive] = useState(true)

  const resetResults = () => {
    props.dispatch(clearAnswers())
    setDisplayAnswer(false)
    setActive(true)
  }

  const handleTitle = e => {
    setTitle(e.target.value)
  }

  const handleResult = () => {
    setDisplayAnswer(true)
  }

  const handleActive = () => {
    setActive(false)
  }

  const bechdel = () => {
    if (props.questions[0].answer === 'yes' && props.questions[1].answer === 'yes') return 'PASSED THE BECHDEL TEST'
    else return 'FAILED THE BECHDEL TEST'
  }

  const reesDavies = () => {
    if (props.questions[2].answer === 'yes') return 'PASSED THE REES DAVIES TEST'
    else return 'FAILED THE REES DAVIES TEST'
  }

  const ko = () => {
    if (props.questions[3].answer === 'yes' && props.questions[4].answer === 'yes' && props.questions[5].answer === 'yes') return 'PASSED THE KO TEST'
    else return 'FAILED THE KO TEST'
  }

  const landau = () => {
    if (props.questions[6].answer === 'yes' && props.questions[7].answer === 'no' && props.questions[8].answer === 'no') return 'PASSED THE LANDAU TEST'
    else return 'FAILED THE LANDAU TEST'
  }

  const feldman = () => {
    const result = props.questions.slice(8).filter(el => el.answer === 'yes')
    if (result.length > 4) return 'PASSED THE FELDMAN SCORE'
    else return 'FAILED THE FELDMAN SCORE'
  }

  if (displayAnswer) {
    return (
      <>
        <MovieTestDetails />
        <Box className={classes.result}>
          <Typography variant="h2" className={classes.resultTitle}>
            {`Results for ${title}:`}
          </Typography>
          <div className={classes.resultInfo}>
            <div className={classes.resultStuff}>
              {bechdel().includes('PASSED') ? <img className={classes.icon} src="/icons/correct.svg" alt="passed icon" /> : <img className={classes.icon} src="/icons/prohibition.svg" alt="did not pass icon" />}
              <Typography className={classes.resultText} variant="body1" gutterBottom>{bechdel()}
              </Typography>
            </div>
            <div className={classes.resultStuff}>
              {reesDavies().includes('PASSED') ? <img className={classes.icon} src="/icons/correct.svg" alt="passed icon" /> : <img className={classes.icon} src="/icons/prohibition.svg" alt="did not pass icon" />}<Typography className={classes.resultText} variant="body1" gutterBottom>{reesDavies()}
              </Typography>
            </div>
            <div className={classes.resultStuff}>
              {ko().includes('PASSED') ? <img className={classes.icon} src="/icons/correct.svg" alt="passed icon" /> : <img className={classes.icon} src="/icons/prohibition.svg" alt="did not pass icon" />}
              <Typography className={classes.resultText} variant="body1" gutterBottom>
                {ko()}
              </Typography>
            </div>
            <div className={classes.resultStuff}>
              {landau().includes('PASSED') ? <img className={classes.icon} src="/icons/correct.svg" alt="passed icon" /> : <img className={classes.icon} src="/icons/prohibition.svg" alt="did not pass icon" />}
              <Typography className={classes.resultText} variant="body1" gutterBottom>{landau()}
              </Typography></div>
            <div className={classes.resultStuff}>
              {feldman().includes('PASSED') ? <img className={classes.icon} src="/icons/correct.svg" alt="passed icon" /> : <img className={classes.icon} src="/icons/prohibition.svg" alt="did not pass icon" />}
              <Typography className={classes.resultText} variant="body1" gutterBottom>{feldman()}
              </Typography>
            </div>
          </div>
          <Button onClick={resetResults} variant="contained" color="primary">Test Another Film</Button>
        </Box>
      </>
    )
  } else {
    return (
      <>
        <MovieTestDetails />
        <Container className={classes.content}>
          <div className={classes.inputField}>
            <TextField
              required={true}
              id="custom-css-outlined-input"
              variant="outlined"
              label="Movie Title"
              type="search"
              className={classes.input}
              onChange={handleTitle}
            />
            <br />
            <br />
            <Button className={classes.inputButton} onClick={handleActive} variant="contained" color="primary">Start</Button>
            <br />
          </div>
          {data.map(el => <QuizQuestion title={title} isActive={disable} handleResult={handleResult} key={el.id} question={el.question} id={el.id} test={el.test} />)}
        </Container>
      </>
    )
  }
}

Quiz.propTypes = {
  id: PropTypes.string,
  question: PropTypes.string,
  test: PropTypes.string,
  handleChange: PropTypes.func,
  handleResult: PropTypes.func,
  title: PropTypes.string,
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  return {
    questions: state.quizAnswer
  }
}

export default connect(mapStateToProps)(Quiz)
