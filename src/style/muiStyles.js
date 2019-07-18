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

export const HeaderStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1, 4, 4),
    outline: 'none',
    textAlign: "center"
  }
}))

export const useStyles = makeStyles(theme => ({
  example: {
    width: 200
  }
}))
