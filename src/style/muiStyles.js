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

export const MovieListStyles = makeStyles(theme => ({
  example: {
    width: 200
  }
}))
