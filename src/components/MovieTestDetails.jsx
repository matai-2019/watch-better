import React, { useState } from 'react'
import {
  Modal,
  Paper,
  Typography,
  CardActions,
  Button,
  Card,
  CardContent,
  Grid
} from '@material-ui/core'
import { MovieTestDetailsStyles } from '../style/muiStyles'
import testInfo from '../data/diversityTestInfo'

const MovieTestDetails = props => {
  const classes = MovieTestDetailsStyles(props)
  const [open, setOpen] = useState([false, false, false, false])

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

  return testInfo.map((test, i) => (
    <Grid key={test.card} className={classes.grid} style={{ 'white-space': 'nowrap' }}>
      <Card key={test.id} className={classes.card}>
        <CardContent>
          <img src="https://img.icons8.com/cute-clipart/64/000000/test-passed.png" alt='test-passes'/>
          <Typography variant="h6" component="h2" gutterBottom>
            {test.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen(i)} size="small">
          Learn More
          </Button>
        </CardActions>
        <Modal
          aria-labelledby={test.name}
          aria-describedby={`Description of the ${test.name} test`}
          open={open[i]}
          onClose={handleClose(i)}
        >
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h2" gutterBottom>
              {test.name}
            </Typography>
            <Typography component="p">{test.description}</Typography>
          </Paper>
        </Modal>
      </Card>
    </Grid>
  ))
}

export default MovieTestDetails
