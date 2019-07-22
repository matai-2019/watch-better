import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFDF59'
    },
    secondary: {
      main: '#71a4a1'
    },
    background: {
      main: '#2a2e36'
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
  avatar: {
    color: '#333',
    backgroundColor: '#FFDF59',
    border: '2px solid #333',
    margin: 1.2,
    width: 30,
    height: 30,
    fontSize: 15,
    paddingTop: 2
  },
  list: {
    margin: '2vw',
    marginLeft: '4vw',
    width: '70vw'
  },
  star: {
    iconFilled: 'pink'
  },
  button: {
    border: 'solid 2px #333',
    color: '#333',
    backgroundColor: '#FFDF59',
    '&:hover': {
      backgroundColor: '#FFDF59',
      border: 'solid 2px #333',
      color: '#333'
    }
  },
  icon: {
    fontFamily: 'Material Icons',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 24,
    display: 'inlineBlock',
    lineHeight: 0.8,
    textTransform: 'none',
    letterSpacing: 'normal',
    wordWrap: 'normal',
    whiteSpace: 'nowrap',
    direction: 'ltr'
  },
  seenButton: {
    border: 'solid 2px #333',
    color: '#333',
    marginLeft: '15vw'
  },
  watchButton: {
    border: 'solid 2px #333',
    color: '#333',
    marginLeft: 5,
    marginRight: 0
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
    marginBottom: 7,
    color: '#FFDF59'
  },
  edaText: {
    padding: '1',
    fontSize: '12px',
    fontWeight: '300'
  },
  footerText: {
    marginTop: 10
  },
  githubIcon: {
    '&:hover': {
      backgroundColor: '#555'
    }
  },
  enspiralIcon: {
    '&:hover': {
      backgroundColor: '#555'
    }
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
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#333',
    color: 'white'
  },
  card: {
    width: 200,
    height: 100,
    textAlign: 'center',
    margin: theme.spacing(2),
    padding: theme.spacing(2.5)
  },
  cardContainer: {
    marginTop: theme.spacing(8),
    color: 'white',
    backgroundColor: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 40,
    width: 40,
    '&:hover': {
      height: 50,
      width: 50,
      backgroundColor: '#AF8E00',
      borderRadius: '50%'
    },
    header: {
      padding: 0,
      margin: 0
    }
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
  root: {
    flexGrow: 1
  },
  toolbar: {
    backgroundColor: '#333'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  logo: {
    flexGrow: 2,
    display: 'none',
    fontSize: '35px',
    fontWeight: '800',
    color: '#F5C400',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  tagline: {
    flexGrow: 25,
    display: 'none',
    fontSize: '15px',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  searchIcon: {
    color: '#FFDF59'
  },
  multilineColor: {
    color: 'white'
  },
  navButton: {
    color: '#FFDF59',
    flexGrow: 2,
    '&:hover': {
      backgroundColor: '#555'
    }
  },
  link: {
    textDecoration: 'none',
    color: '#FFDF59'
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
    height: 290,
    alignContent: 'center',
    display: 'flex'
  },
  testIcons: {
    marginTop: '250px',
    marginLeft: '10px',
    display: 'inline-flex',
    height: 290
  },
  button: {
    border: 'solid 2px #333',
    color: '#333',
    backgroundColor: '#FFDF59',
    '&:hover': {
      backgroundColor: '#FFDF59',
      border: 'solid 2px #333',
      color: '#333'
    }
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

export const QuizStyles = makeStyles(theme => ({
  question: {
    fontSize: '2em',
    color: '#333'
  },
  content: {
    marginTop: '8em',
    padding: '2em'
  },
  title: {
    marginTop: '10em',
    height: '55vh'
  }
}))

export const QuizQuestionStyles = makeStyles(theme => ({
  question: {
    fontSize: '1.5em',
    color: '#333'
  },
  intro: {
    color: '#333'
  }
}))

export const SearchStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  inputRoot: {
    flexWrap: 'wrap'
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1,
    color: theme.palette.primary.main
  },
  divider: {
    height: theme.spacing(2)
  },
  label: {
    color: theme.palette.primary.main
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

export const CastStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing()
  }
}))
