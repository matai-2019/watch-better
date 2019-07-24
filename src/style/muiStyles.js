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
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#FFDF59'
  },
  img: {
    display: 'block',
    maxWidth: '50%',
    borderRadius: '0.3vw'
  },
  text: {
    fontSize: 28,
    cursor: 'pointer'
  },
  avatar: {
    color: '#222',
    backgroundColor: '#FFDF59',
    border: '2px solid #333',
    margin: 2,
    padding: 2,
    width: 30,
    height: 30,
    fontSize: 15,
    paddingTop: 2
  },
  list: {
    width: '80vw',
    marginTop: '2vw'
  },
  button: {
    border: 'solid 2px #333',
    color: '#333',
    backgroundColor: '#DADADA',
    '&:hover': {
      backgroundColor: '#00000014',
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
    direction: 'ltr',
    height: 20
  },
  seenButton: {
    border: 'solid 2px #333',
    color: '#333',
    height: 30
  },
  watchButton: {
    border: 'solid 2px #333',
    color: '#333',
    marginLeft: 5,
    marginRight: 0,
    height: 30
  },
  topMargin: {
    marginTop: '7vw'
  }
}))

export const WatchlistStyles = makeStyles(theme => ({
  app: {
    height: '8vw',
    justifyContent: 'center',
    marginTop: '4.4vw'
  },
  top: {
    marginTop: '10vw'
  },
  watchlist: {
    fontSize: 40,
    color: '#333'
  }
}))

export const WatchlistItemStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#FFDF59'
  },
  text: {
    fontSize: 28,
    cursor: 'pointer',
    color: '#333'
  },
  list: {
    margin: '1vw',
    width: '80vw'
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
    direction: 'ltr',
    cursor: 'pointer',
    height: 20
  },
  seenButton: {
    border: 'solid 2px #333',
    color: '#333',
    height: 30
  },
  removeButton: {
    border: 'solid 2px #333',
    color: '#333',
    marginLeft: 5,
    marginRight: 0,
    height: 30,
    backgroundColor: '#FF6C6C'
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
    padding: theme.spacing(6, 0, 2),
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
    padding: 1,
    fontSize: 12,
    fontWeight: 300
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
    textAlign: 'center',
    padding: '20px 0 10px 0'
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
    fill: 'white',
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
    color: 'white',
    top: '120%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    lineHeight: 2
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
    marginRight: '42px',
    marginBottom: 15,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  logo: {
    flexGrow: 2,
    display: 'none',
    fontSize: 35,
    fontWeight: 800,
    color: '#F5C400',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
    transition: 'all 1s',
    '&:hover': {
      transform: 'scale(1.13)'
    }
  },
  tagline: {
    flexGrow: 25,
    display: 'none',
    fontSize: 15,
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
  watchButton: {
    color: '#FFDF59',
    flexGrow: 2,
    '&:hover': {
      backgroundColor: '#555'
    }
  },
  link: {
    textDecoration: 'none',
    color: '#FFDF59'
  },
  divide: {
    marginRight: '2vw'
  },
  loginButton: {
    marginRight: '15px',
    transition: 'all 0.35s',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  }
}))

export const AvatarsHoverStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none'
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: '#FFDF59',
    backgroundColor: '#333',
    fontFamily: 'Roboto'
  },
  img: {
    display: 'block',
    maxWidth: '50%',
    borderRadius: '0.3vw'
  },
  movieTestText: {
    fontSize: '1.10rem',
    fontWeight: 500
  },
  avatar: {
    color: '#333',
    backgroundColor: '#FFDF59',
    border: '2px solid #333',
    margin: 2.5,
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
    display: 'line',
    fontSize: '2.5rem'
  },
  year: {
    marginLeft: theme.spacing(),
    fontSize: '1.5rem',
    color: '#ccc'
  },
  genres: {
    fontWeight: 300,
    padding: theme.spacing(1, 0)
  },
  overview: {
    paddingTop: theme.spacing()
  },
  overviewText: {
    fontWeight: 300
  },
  avatar: {
    color: '#333',
    backgroundColor: '#FFDF59',
    border: '2px solid #333',
    margin: 2,
    width: 30,
    height: 30,
    fontSize: 15,
    paddingTop: 2
  }
}))

export const RecommendationsStyles = makeStyles({
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#333333',
    alignItems: 'center'
  },
  card: {
    flexGrow: 1,
    borderRadius: 0,
    backgroundColor: 'black',
    height: '100vh'
  },
  ourTopPicks: {
    marginBottom: -60,
    display: 'inline-flex',
    padding: 0
  },
  media: {
    height: '100vh',
    alignItems: 'center',
    display: 'flex',
    transition: 'all 1s',
    '&:hover': {
      transform: 'scale(1.06)',
      opacity: 0.6
    }
  },
  testIcons: {
    marginLeft: '2%',
    marginBottom: '2%',
    position: 'fixed',
    bottom: 0,
    padding: 1
  },
  buttonWrapper: {
    width: 220,
    margin: '0 auto',
    marginBottom: -90,
    transform: 'translate(-0vh, -98vh)'
  },
  button: {
    alignItems: 'center',
    fontSize: '1rem',
    border: 'solid 2.5px #FFDF59',
    width: 220,
    height: 55,
    backgroundColor: '#2d2c289e',
    color: '#FFDF59',
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
    color: 'white'
  },
  content: {
    marginTop: '2em',
    paddingTop: '3em',
    width: '70%',
    backgroundColor: 'white'
  },
  result: {
    color: 'white',
    marginTop: '8em',
    marginLeft: '20%',
    marginBottom: '5em',
    height: '65vh'
  },
  icon: {
    height: '1.5em',
    margin: '1em'
  },
  button: {
    padding: '5em'
  }
}))

export const QuizQuestionStyles = makeStyles(theme => ({
  question: {
    fontSize: '1em',
    color: '#333'
  },
  intro: {
    color: 'white'
  },
  button: {
    margin: '2em'
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
    right: 0,
    width: '278px'
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
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1.6),
    color: '#FFDF59',
    fontSize: '1.25rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em'
  }
}))

export const RegisterStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  lock: {
    color: theme.palette.primary.main
  },
  textfield: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFDF59'
      },
      '&:hover fieldset': {
        borderColor: '#FFDF59'
      }
    }
  },
  textfieldColor: {
    color: '#FFDF59'
  },
  link: {
    color: '#FFDF59',
    textDecoration: 'none'
  }
}))

export const CommentsStyles = makeStyles(theme => ({
  commentsContainer: {
    display: 'flex',
    padding: '3em',
    height: 400
  },
  comment: {
    flexGrow: 2,
    maxWidth: 500,
    float: 'right'
  }
}))

export const CommentFormStyles = makeStyles(theme => ({
  text: {
    color: theme.palette.primary
  },
  paper: {
    width: '30%',
    margin: 20,
    padding: '1em',
    flexGrow: 1,
    float: 'left'
  },
  comment: {
    width: '90%',
    margin: '1em'
  },
  filter: {
    width: '30%',
    margin: 20,
    padding: '1em',
    backgroundColor: 'gray',
    opacity: 0.8
  }
}))
