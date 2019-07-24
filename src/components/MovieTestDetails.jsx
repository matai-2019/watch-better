import React, { useState } from 'react'
import {
  Modal,
  Paper,
  Typography,
  Box
} from '@material-ui/core'
import { MovieTestDetailsStyles } from '../style/muiStyles'
import testInfo from '../data/diversityTestInfo'

const MovieTestDetails = props => {
  const classes = MovieTestDetailsStyles(props)
  const [open, setOpen] = useState([false, false, false, false, false])

  const handleOpen = index => () => {
    const changeToOpen = [...open]
    changeToOpen[index] = true
    setOpen(changeToOpen)
  }

  const handleClose = index => () => {
    const changeToClosed = [...open]
    changeToClosed[index] = false
    setOpen(changeToClosed)
  }

  return (
    <div className={classes.cardContainer}>
      {testInfo.map((test, i) => (
        <Box boxShadow={0} key={test.id} className={classes.card}>
          <div className={classes.iconContainer}>
            <img onClick={handleOpen(i)} className={classes.icon} src={test.icon} alt='test-passes' />
            <Typography variant="body1" component="h2" gutterBottom>
              {test.name}
            </Typography>
          </div>
          <Modal
            aria-labelledby={test.name}
            aria-describedby={`Description of the ${test.name} test`}
            open={open[i]}
            onClose={handleClose(i)}
          >
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h2" gutterBottom>{test.name}</Typography>
              <br />
              <Typography component="p">{test.description}</Typography>
            </Paper>
          </Modal>
        </Box>
      ))}
    </div>
  )
}

export default MovieTestDetails
