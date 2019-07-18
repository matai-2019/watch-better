import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

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
