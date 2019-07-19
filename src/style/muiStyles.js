import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
// import HUE from '@material-ui/core/colors/HUE'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#dd2c00'
    },
    secondary: {
      main: '#4a148c'
    }
  },
  spacing: 8
})

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
  cameraBody: {
    fill: '#fff',
    fillOpacity: 0.95,
    stroke: 'none'
  },

  loadingCamera: {
    height: '100vh',
    background: 'yellow',
    fill: theme.palette.common.black,
    display: 'flexbox',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  span: {
    fontFamily: 'Open Sans, arial, sans-serif',
    fontSize: '1.2em',
    fontWeight: 'lighter 300',
    fontColor: '#fff',
    lineHeight: '2em'
  }
}))
