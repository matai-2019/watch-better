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
    },
    lightbg: {
      main: '#e0e0e0'
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

export const MovieListStyles = makeStyles(theme => ({
  actions: {
    backgroundColor: theme.palette.lightbg.main,
    marginRight: '5vw',
    padding: 20
  },
  sort: {
    backgroundColor: theme.palette.lightbg.main,
    borderRadius: 4
  },
  container: {
    backgroundColor: theme.palette.lightbg.main,
    padding: 0,
    paddingBottom: 50,
    marginBottom: 0,
    marginTop: 130,
    borderRadius: 3,
    border: '7px solid #F3C814'
  },
  title: {
    fontSize: '5vw',
    fontWeight: 200,
    margin: 0,
    color: theme.palette.background.main
  },
  header: {
    height: 100,
    padding: 0,
    marginRight: '17vw',
    marginTop: 10
  }
}))

export const MovieListItemStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.lightbg.main,
    border: '5px solid #333'
  },
  img: {
    display: 'block',
    maxWidth: '50%',
    borderRadius: '0.3vw'
  },
  text: {
    fontSize: '28px',
    cursor: 'pointer'
  },
  avatar: {
    color: '#222',
    backgroundColor: theme.palette.primary.main,
    border: '2px solid #333',
    margin: 1.2,
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
    color: theme.palette.background.main,
    height: 35
  },
  watchButton: {
    border: 'solid 2px #333',
    color: theme.palette.background.main,
    marginLeft: 5,
    marginRight: 0,
    height: 35
  },
  topMargin: {
    marginTop: 70
  }
}))

export const WatchlistStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.lightbg.main,
    borderRadius: 3,
    border: '7px solid #F3C814',
    marginTop: '10vw',
    paddingBottom: '3vw'
  },
  title: {
    fontSize: '4vw',
    fontWeight: 200,
    margin: '2vw',
    marginRight: '35vw',
    color: theme.palette.background.main
  },
  button: {
    border: 'solid 2px #333',
    color: theme.palette.background.main,
    backgroundColor: theme.palette.primary.main,
    fontSize: '1.5vw',
    fontWeight: 120,
    width: '15vw',
    height: '4vw',
    marginTop: '1.3vw',
    marginRight: '6vw',
    marginBottom: 0
  },
  actions: {
    height: 140
  }
}))

export const WatchlistItemStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.lightbg.main,
    border: '2px solid #333',
    boxShadow: '0 0 0 0'
  },
  text: {
    fontSize: '28px',
    cursor: 'pointer',
    color: theme.palette.background.main
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
    color: theme.palette.background.main,
    height: 30
  },
  removeButton: {
    border: 'solid 2px #333',
    color: theme.palette.background.main,
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
    backgroundColor: theme.palette.background.main,
    padding: theme.spacing(6, 0, 4),
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 5
  },
  socialButtons: {
    marginBottom: 7,
    color: theme.palette.primary.main
  },
  edaText: {
    padding: 1,
    fontSize: '12px',
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
    maxHeight: '500px',
    padding: theme.spacing(6, 6, 6, 6),
    outlineColor: '#FFDF59',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.main,
    color: 'white'
  },
  innerIcon: {
    width: '75px',
    height: '75px',
    border: 'solid 2px',
    borderColor: '#FFDF59',
    borderRadius: '50%',
    padding: '10px',
    marginLeft: '45%',
    marginBottom: theme.spacing(2),
    display: 'inline-flex'
  },
  modalTitle: {
    fontWeight: '200',
    fontSize: '40px',
    textAlign: 'center',
    marginBottom: '7px'
  },
  modalFounded: {
    fontWeight: '800',
    textAlign: 'center'
  },
  modalText: {
    fontWeight: '200'
  },
  card: {
    width: 200,
    height: 100,
    textAlign: 'center',
    margin: theme.spacing(2),
    padding: theme.spacing(2.5)
  },
  cardContainer: {
    marginTop: theme.spacing(6),
    marginBottom: '4px',
    color: 'white',
    backgroundColor: theme.palette.background.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 60,
    width: 60,
    padding: '5px',
    transition: 'all 0.2s',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: '#AF8E00',
      borderRadius: '50%',
      padding: '7px'
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
    backgroundColor: theme.palette.background.main
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
    fontSize: '35px',
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
    fontSize: '15px',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  searchIcon: {
    color: theme.palette.primary.main
  },
  multilineColor: {
    color: 'white'
  },
  navButton: {
    color: theme.palette.primary.main,
    flexGrow: 2,
    '&:hover': {
      backgroundColor: '#555'
    }
  },
  watchButton: {
    color: theme.palette.primary.main,
    flexGrow: 2,
    '&:hover': {
      backgroundColor: '#555'
    }
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main
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

export const MovieDetailAvatarStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none'
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.main,
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
    color: theme.palette.background.main,
    backgroundColor: theme.palette.primary.main,
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
    color: theme.palette.background.main,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      border: 'solid 2px #333',
      color: theme.palette.background.main
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
    color: theme.palette.background.main,
    marginLeft: '15vw'
  },
  watchButton: {
    border: 'solid 2px #333',
    color: theme.palette.background.main,
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
    color: theme.palette.background.main,
    backgroundColor: theme.palette.primary.main,
    border: '2px solid #333',
    margin: 1.2,
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
    height: '720px'
  },
  ourTopPicks: {
    marginBottom: '-60px',
    display: 'inline-flex',
    padding: 0
  },
  media: {
    height: '725px',
    alignItems: 'center',
    display: 'flex',
    transition: 'all 1s',
    '&:hover': {
      transform: 'scale(1.06)',
      opacity: 0.6
    }
  },
  title: {
    marginTop: '12px',
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 600,
    lineHeight: 1.6,
    letterSpacing: '0.0075em'
  },
  testIcons: {
    marginLeft: '.5%',
    marginBottom: '.5%',
    position: 'fixed',
    bottom: 0,
    padding: 1
  },
  buttonWrapper: {
    width: '270px',
    margin: '0 auto',
    marginBottom: '-90px',
    transform: 'translate(-0px, -700px)'
  },
  button: {
    alignItems: 'center',
    border: 'solid 2.5px #FFDF59',
    width: '270px',
    height: '55px',
    backgroundColor: '#FFDF5930',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      border: 'solid 2px #333',
      color: theme.palette.background.main
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
    minWidth: 200,
    display: 'flex',
    wrap: 'nowrap'
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
    color: theme.palette.background.main
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
    color: theme.palette.primary.main,
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
        borderColor: theme.palette.primary.main
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main
      }
    }
  },
  textfieldColor: {
    color: theme.palette.primary.main
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none'
  }
}))

export const CommentsStyles = makeStyles(theme => ({
  commentsContainer: {
    display: 'flex',
    padding: '3em',
    height: '400px'
  },
  comment: {
    flexGrow: 2,
    maxWidth: '500px',
    float: 'right'
  }
}))

export const CommentFormStyles = makeStyles(theme => ({
  text: {
    color: theme.palette.primary
  },
  paper: {
    width: '30%',
    margin: '20px',
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
    margin: '20px',
    padding: '1em',
    backgroundColor: 'gray',
    opacity: 0.8
  }
}))
