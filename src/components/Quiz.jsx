import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Container, TextField, Button, Typography, List, ListItem } from '@material-ui/core'

import MovieTestDetails from './MovieTestDetails'
import { QuizStyles } from '../style/muiStyles'
import QuizQuestion from './QuizQuestion'
import data from '../data/quizQuestions.js'

const Quiz = (props) => {
  const classes = QuizStyles(props)

  const [title, setTitle] = useState('')
  const [isVisible, setVisible] = useState(true)
  const [displayAnswer, setDisplayAnswer] = useState(false)

  const handleTitle = e => {
    setTitle(e.target.value)
  }

  const onSubmit = () => {
    setVisible(false)
  }

  const handleResult = () => {
    setDisplayAnswer(true)
  }

  const bechdel = () => {
    if (props.questions[0].answer === 'yes' && props.questions[1].answer === 'yes') return 'Passed the Bechdel Test'
    else return 'Failed the Bechdel Test'
  }

  const reesDavies = () => {
    if (props.questions[2].answer === 'yes') return 'Passed the Rees-Davies Test'
    else return 'Failed the Rees-Davies Test'
  }

  const ko = () => {
    if (props.questions[3].answer === 'yes' && props.questions[4].answer === 'yes' && props.questions[5].answer === 'yes') return 'Passed the Ko Test' 
    else return 'Failed the Ko Test'
  }

  const landau = () => {
    if (props.questions[6].answer === 'yes' && props.questions[7].answer === 'no' && props.questions[8].answer === 'no') return 'Passed the Landau Test'
    else return 'Failed the Landau Test'
  }

  const feldman = () => {
    const result = props.questions.slice(8).filter(el => el.answer === 'yes')
    if (result.length > 4) return 'Passed the Feldman Test'
    else return 'Failed the Feldman Test'
  }

  if (displayAnswer) {
    return (
      <>
      <MovieTestDetails />
        <Box className={classes.result}>
          <Typography variant="h2">
            {`${title.toUpperCase()} HAS:`}
          </Typography>
          <List>
            <ListItem>{bechdel().includes('Passed') ? <img className={classes.icon} src="/icons/correct.svg" alt="passed icon"/> : <img className={classes.icon} src="/icons/prohibition.svg" alt="did not pass icon"/> }<Typography variant="body1" gutterBottom>{bechdel()}</Typography></ListItem>
            <ListItem>{reesDavies().includes('Passed') ? <img className={classes.icon} src="/icons/correct.svg" alt="passed icon"/> : <img className={classes.icon} src="/icons/prohibition.svg" alt="did not pass icon"/> }<Typography variant="body1" gutterBottom>{reesDavies()}</Typography></ListItem>
            <ListItem>{ko().includes('Passed') ? <img className={classes.icon} src="/icons/correct.svg" alt="passed icon"/> : <img className={classes.icon} src="/icons/prohibition.svg" alt="did not pass icon"/> }<Typography variant="body1" gutterBottom>{ko()}</Typography></ListItem>
            <ListItem>{landau().includes('Passed') ? <img className={classes.icon} src="/icons/correct.svg" alt="passed icon"/> : <img className={classes.icon} src="/icons/prohibition.svg" alt="did not pass icon"/> }<Typography variant="body1" gutterBottom>{landau()}</Typography></ListItem>
            <ListItem>{feldman().includes('Passed') ? <img className={classes.icon} src="/icons/correct.svg" alt="passed icon"/> : <img className={classes.icon} src="/icons/prohibition.svg" alt="did not pass icon"/> }<Typography variant="body1" gutterBottom>{feldman()}</Typography></ListItem>
          </List>
        </Box>
      </>
    )
  } else if (isVisible) {
    return (
      <Container className={classes.title}>
        <TextField required={true} 
          id="standard-search"
          label="Movie Title"
          type="search"
          margin="normal"
          onChange={handleTitle}
          InputProps={{ className: classes.titleText }}
        />
        <br/>
        <Button onClick={onSubmit} fullWidth={true} variant="contained" color="primary">Start</Button>
        <br />
        <br />
      </Container>
    )
  } else if (!isVisible) {
    return (
      <Container className={classes.content}>
        {data.map(el => <QuizQuestion title={title} handleResult={handleResult} key={el.id} question={el.question} id={el.id} test={el.test}/>)}
      </Container>
    )
  }
}

// Quiz.propTypes = {
//   // id: PropTypes.string,
//   // question: PropTypes.string,
//   // test: PropTypes.string,
//   // handleChange: PropTypes.func,
//   // handleResult: PropTypes.func,
//   // title: PropTypes.string,
//   // dispatch: PropTypes.func
// }

const mapStateToProps = state => {
  return {
    questions: state.quizAnswer
  }
}

export default connect(mapStateToProps)(Quiz)
