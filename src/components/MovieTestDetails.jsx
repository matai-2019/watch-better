import React, { useState } from 'react'
import {
  Modal,
  Paper,
  Typography,
  CardActions,
  Button,
  Card,
  CardContent
} from '@material-ui/core'

import { MovieTestDetailsStyles } from '../style/muiStyles'

const testInfo = [
  {
    id: 1,
    name: 'The Bechdel Test',
    description:
      'The Bechdel test (/ˈbɛkdəl/ BEK-dəl), also known as the Bechdel–Wallace test, is a measure of the representation of women in fiction. It asks whether a work features at least two women who talk to each other about something other than a man. The requirement that the two women must be named is sometimes added.'
  },
  {
    id: 2,
    name: 'The DuVernay Test',
    description:
      'The "DuVernay test" is the race equivalent of the Bechdel test (for women in movies), as suggested by New York Times film critic Manohla Dargis in January 2016, asking whether "blacks and other minorities have fully realized lives rather than serve as scenery in white stories." It aims to point out the lack of people of color in Hollywood movies, through a measure of their importance to a particular movie or the lack of a gratuitous link to white actors.'
  },
  {
    id: 3,
    name: 'The Ko Test',
    description:
      'Speaking means dialogue, not fight grunts. For animated films, we checked IMDb and counted a character as non-white if she was voiced by a non-white actor. Originally, the test didn’t specify that the character had to speak English but rather asked if she spoke “in the language of the release,” but all the movies we watched were English-language anyway.'
  },
  {
    id: 4,
    name: 'The Landau Test',
    description:
      'The criteria for the Landau Test focuses more on what a film shouldn’t have. A film fails if: a main female character ends up dead, pregnant, or if she causes a plot problem for a male protagonist. Founded by Noga Landau'
  }
]

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
    <Card key={test.id} className={classes.card}>
      <CardContent>
        <img src="https://img.icons8.com/cute-clipart/64/000000/test-passed.png" />
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
  ))
}

export default MovieTestDetails
