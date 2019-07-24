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
    marginRight: 90,
    padding: 20,
    height: 120
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
    border: '5px solid #F3C814'
  },
  title: {
    fontSize: 65,
    fontWeight: 170,
    margin: 0,
    color: theme.palette.background.main
  },
  header: {
    height: 100,
    padding: 0,
    marginRight: 300,
    marginTop: 5
  }
}))

export const MovieListItemStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.lightbg.main,
    border: '3px solid #333',
    width: '60vw',
    marginLeft: 30
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
    backgroundColor: theme.palette.primary.main,
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
    border: '5px solid #F3C814',
    marginTop: 150,
    paddingBottom: 60
  },
  title: {
    fontSize: 60,
    fontWeight: 200,
    margin: 23,
    marginRight: 440,
    color: theme.palette.background.main
  },
  button: {
    border: 'solid 2px #333',
    color: theme.palette.background.main,
    backgroundColor: theme.palette.primary.main,
    fontSize: '1.5vw',
    fontWeight: 120,
    width: 220,
    height: 50,
    marginTop: 27,
    marginRight: 120,
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
    boxShadow: '0 0 0 0',
    width: '57vw'
  },
  text: {
    fontSize: 28,
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
    alignItems: 'center'
  },
  socialButtons: {
    marginBottom: 7,
    color: theme.palette.primary.main
  },
  edaText: {
    padding: 1,
    fontSize: 12,
    fontWeight: 300,
    textAlign: 'center'
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
    textAlign: 'center',
    padding: '20px 0 10px 0'
  },
  cardContainer: {
    marginTop: theme.spacing(8),
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
  fullPage: {
    backgroundColor: 'grey',
    margin: 0,
    height: '100%',
    width: '100%'
  },
  loadingCamera: {
    fill: 'white',
    fillOpacity: 0.95,
    stroke: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute'
  },
  loadingText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: 20,
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
    fontSize: 35,
    fontWeight: 800,
    color: '#F5C400',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
    transition: 'all 1s',
    '&:hover': {
      transform: 'scale(1.05)'
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
  },
  navButton2: {
    color: theme.palette.primary.main,
    flexGrow: 2,
    '&:hover': {
      backgroundColor: '#555'
    },
    marginRight: '20px'
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
    margin: '2.5px 2.5px 2.5px 0px',
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
  seenButton: {
    border: 'solid 2px #333',
    color: '#333',
    height: 40,
    marginTop: 30,
    marginLeft: 40
  },
  watchButton: {
    border: 'solid 2px #333',
    color: '#333',
    height: 40,
    marginTop: 30,
    marginLeft: 10
  },
  buttonIcon: {
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
  left: {
    paddingLeft: 0
  },
  cardContainer: {
    marginTop: 64,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundColor: '#333'
  },
  customFilter: {
    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(10.59%, 5.49%, 1.96%, 1) 0%, rgba(68.6%, 55.7%, 0%, 0.8) 100%)',
    paddingTop: 50,
    paddingBottom: 50
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
    height: '80vh'
  },
  ourTopPicks: {
    marginBottom: -60,
    display: 'inline-flex',
    padding: 0
  },
  media: {
    height: '80vh',
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
    transform: 'translate(-0vh, -97vh)'
  },
  button: {
    alignItems: 'center',
    fontSize: '1rem',
    border: 'solid 2.5px #FFDF59',
    width: '270px',
    height: '55px',
    backgroundColor: '#302E29A8',
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
  inputField: {
    marginBottom: '45px',
    marginLeft: '32px',
    display: 'flex'
  },
  input: {
    width: '240px',
    marginRight: '20px'
  },
  inputButton: {
    width: '90px',
    height: '55px'
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
    marginBottom: '3em',
    height: '65vh',
    textAlign: 'center',
    alignItems: 'center'
  },
  resultTitle: {
    fontWeight: '400',
    marginBottom: '40px'
  },
  resultInfo: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '100px',
    marginRight: '100px',
    marginBottom: '60px'
  },
  resultStuff: {
    justifyContent: 'center',
    margin: '30px'
  },
  icon: {
    margin: '1em',
    height: '70px',
    width: '70px'
  },
  button: {
    width: '90px',
    height: '55px'
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
    width: '90px',
    height: '55px',
    marginTop: '15px',
    marginBottom: '40px'
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
    height: 325,
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
  commentsList: {
    height: 330,
    overflow: 'auto'
  },
  noCommentsTitle: {
    color: '#888',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2)
  },
  noCommentsDesc: {
    color: '#888',
    padding: theme.spacing(0, 2)
  }
}))

export const CommentStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(0, 3),
    padding: theme.spacing(2, 2, 1, 2)
  },
  rating: {
    paddingTop: 3,
    marginLeft: theme.spacing()
  },
  dateTime: {
    color: '#bbb'
  }
}))

export const CommentFormStyles = makeStyles(theme => ({
  text: {
    color: theme.palette.primary
  },
  paper: {
    display: 'block',
    position: 'relative',
    height: 300,
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  },
  comment: {
    width: '100%'
  }
}))

export const CommentFormGuestStyles = makeStyles(theme => ({
  container: {
    background: '#666',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    padding: 0
  },
  formMessage: {
    color: theme.palette.primary.main,
    marginTop: 100
  }
}))
