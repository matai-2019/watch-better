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
    padding: '3px',
    margin: '165px 10px 0px 230px'
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
