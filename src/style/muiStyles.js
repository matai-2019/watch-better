import { makeStyles } from '@material-ui/styles'
import { fade, createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4b6d97'
    },
    secondary: {
      main: '#71a4a1'
    }
  },
  spacing: 8,
  fontSize: 16
})

export const SorterStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

export const MovieListItemStyles = makeStyles(theme => ({
  root: {
    flexGrow: '1'
  },
  paper: {
    padding: theme.spacing(2)
  },
  img: {
    display: 'block',
    maxWidth: '50%',
    borderRadius: '0.3vw'
  },
  text: {
    fontSize: '28px'
  },
  greenAvatar: {
    color: '#fff',
    backgroundColor: 'green',
    margin: 0,
    width: 30,
    height: 30,
    fontSize: 15
  },
  orangeAvatar: {
    margin: 0,
    color: '#fff',
    backgroundColor: 'orange',
    width: 30,
    height: 30,
    fontSize: 15
  },
  purpleAvatar: {
    margin: 0,
    color: '#fff',
    backgroundColor: 'purple',
    width: 30,
    height: 30,
    fontSize: 15
  },
  blueAvatar: {
    margin: 0,
    color: '#fff',
    backgroundColor: 'blue',
    width: 30,
    height: 30,
    fontSize: 15
  },
  redAvatar: {
    margin: 0,
    color: '#fff',
    backgroundColor: 'red',
    width: 30,
    height: 30,
    fontSize: 15
  },
  list: {
    margin: '2vw',
    marginLeft: '4vw',
    width: '70vw'
  }
}))

export const HeaderStyles = makeStyles(theme => ({
  headerContent: {
    backgroundColor: theme.palette.background.paper
  }
}))

export const FooterStyles = makeStyles(theme => ({
  footerContent: {
    backgroundColor: '#333',
    padding: theme.spacing(6, 0, 4),
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  socialButtons: {
    marginBottom: 10,
    color: '#FFDF59'
  },

  edaText: {
    padding: '1',
    fontSize: '0.8em',
    fontWeight: '300'
  },

  footerText: {
    marginTop: 10
  }
}))

export const MovieTestDetailsStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    padding: theme.spacing(1, 4, 4),
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  card: {
    width: 210,
    textAlign: 'center',
    margin: theme.spacing(2)
  }
}))

export const WaitIndicatorStyles = makeStyles(theme => ({
  loadingCamera: {
    fill: 'purple',
    fillOpacity: 0.95,
    stroke: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute'
  },

  Typography: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontWeight: 'lighter 300',
    color: 'purple',
    top: '120%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    lineHeight: '2'
  }
}))

export const NavBarStyles = makeStyles(theme => ({
  toolbar: {
    justifyContent: 'right'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
}))

export const MovieDetailsStyles = makeStyles(theme => ({
  container: {
    padding: 0
  },
  detailsContainer: {
    color: '#fff'
  },
  poster: {
    height: 400
  },
  icon: {
    margin: 5
  },
  titleContainer: {
    padding: theme.spacing(3, 0, 4, 0)
  },
  title: {
    display: 'inline',
    fontSize: '2.5rem'
  },
  year: {
    marginLeft: theme.spacing(),
    fontSize: '1.5rem',
    color: '#ccc'
  },
  genres: {
    fontWeight: '300',
    padding: theme.spacing(1, 0)
  },
  overview: {
    paddingTop: theme.spacing()
  },
  overviewText: {
    fontWeight: '300'
  }
}))

export const RecommendationsStyles = makeStyles({
  card: {
    width: 200,
    height: 370,
    margin: theme.spacing(2)
  },
  media: {
    height: 290
  }
})

export const NoMatch = makeStyles(theme => ({
  text: {
    marginTop: '5em',
    textAlign: 'center',
    fontSize: '5em'
  }
}))

export const FilterStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 200,
    display: 'flex',
    wrap: 'nowrap'
  },
  select: {
    '&:before': {
      borderColor: '#000'
    },
    '&:after': {
      borderColor: '#000'
    }
  },
  icon: {
    fill: '#000'
  }
}))

export const QuizStyle = makeStyles(theme => ({
  question: {
    fontSize: '1.5em',
    color: 'black'
  },
  content: {
    padding: '2em'
  }
}))

export const CastMemberStyles = makeStyles({
  card: {
    width: 185,
    height: 370,
    margin: theme.spacing(2)
  },
  media: {
    height: 250
  }
})
