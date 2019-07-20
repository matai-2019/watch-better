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
  spacing: 8
})

export const MovieListItemStyles = makeStyles(theme => ({
  summary: {
    lineHeight: 4,
    height: '60px'
  },
  text: {
    fontSize: '18px'
  },
  summaryText: {
    display: 'inline-block',
    float: 'left',
    marginLeft: '15px'
  },
  moreButton: {
    margin: '-50px 10px 0px'
  },
  divider: {
    width: '100%'
  },
  img: {
    height: '200px',
    width: '140px'
  },
  panel: {
    maxWidth: '80%'
  },
  space: {
    height: '5px'
  },
  detailsPanel: {
    padding: '20px'
  }
}))

export const HeaderStyles = makeStyles(theme => ({
  headerContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 4)
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
    fontFamily: 'Montserrat',
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
  poster: {
    height: 400,
    width: 300,
    marginBottom: 50
  },
  icon: {
    margin: 5
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

export const QuizStyle = makeStyles(theme => ({
  question: {
    fontSize: '1.5em',
    color: 'black'
  },
  content: {
    padding: '2em'
  }
}))
