import React, { useEffect } from 'react'
import {
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Checkbox,
  Input,
  ListItemText
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setFilter } from '../actions/filter'
import { getMovies } from '../actions/movies'
import { FilterStyles } from '../style/muiStyles'

const testTypes = [
  'Bechdel Test',
  'Rees Davies Test',
  'Ko Test',
  'Landau Test',
  'Feldman Test'
]

const Filter = ({ dispatch, selectedTests }, ...props) => {
  const classes = FilterStyles(props)
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value))
  }

  useEffect(() => {
    dispatch(getMovies(selectedTests))
  }, [dispatch, selectedTests])

  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="test-select" className={classes.white}>
        Diversity Tests
        </InputLabel>
        <Select
          multiple
          name="Diversity Test"
          className={classes.select}
          value={selectedTests}
          onChange={handleFilterChange}
          input={<Input id="test-select" />}
          inputProps={{
            classes: {
              icon: classes.icon
            }
          }}
          renderValue={selected => selected.join(', ')}
        >
          {testTypes.map(testType => (
            <MenuItem key={testType} value={testType}>
              <Checkbox checked={selectedTests.indexOf(testType) > -1} />
              <ListItemText primary={testType} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  )
}

const mapStateToProps = ({ selectedTests }) => {
  return {
    selectedTests
  }
}

export default connect(mapStateToProps)(Filter)

Filter.propTypes = {
  selectedTests: PropTypes.array,
  dispatch: PropTypes.func
}
