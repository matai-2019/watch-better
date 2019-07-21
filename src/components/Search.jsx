import React, { useState } from 'react'
import PropTypes from 'prop-types'
import deburr from 'lodash/deburr'
import Downshift from 'downshift'
import { TextField, Paper, MenuItem } from '@material-ui/core/'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { SearchStyles } from '../style/muiStyles'

const renderInput = inputProps => {
  const { InputProps, classes, ref, ...other } = inputProps

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
          label: classes.label
        },
        ...InputProps
      }}
      {...other}
    />
  )
}

renderInput.propTypes = {
  classes: PropTypes.object.isRequired,
  InputProps: PropTypes.object
}

const renderSuggestion = suggestionProps => {
  const {
    movie,
    index,
    itemProps,
    highlightedIndex,
    selectedItem
  } = suggestionProps
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || '').indexOf(movie.title) > -1

  return (
    <MenuItem
      {...itemProps}
      key={movie.id}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {movie.title}
    </MenuItem>
  )
}

renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.number
  ]).isRequired,
  index: PropTypes.number.isRequired,
  itemProps: PropTypes.object.isRequired,
  selectedItem: PropTypes.string.isRequired,
  suggestion: PropTypes.shape({
    label: PropTypes.string.isRequired
  }).isRequired
}

function getSuggestions (value, movies, { showEmpty = false } = {}) {
  const inputValue = deburr(value.trim()).toLowerCase()
  const inputLength = inputValue.length
  let count = 0

  return inputLength === 0 && !showEmpty
    ? []
    : movies.filter(movie => {
      const keep =
          count < 5 &&
          movie.title.slice(0, inputLength).toLowerCase() === inputValue

      if (keep) {
        count += 1
      }

      return keep
    })
}

const Search = ({ movies }, ...props) => {
  const classes = SearchStyles(props)
  const [redirect, setRedirect] = useState({ value: {}, isActive: false })

  const handleChange = item => {
    if (item) {
      const selectedMovie = movies.find(movie => movie.title === item)
      setRedirect({ value: selectedMovie.id, isActive: true })
    }
  }

  return (
    <Downshift onChange={handleChange} id="downshift-options">
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        openMenu,
        selectedItem
      }) => {
        const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
          onFocus: openMenu
        })

        return (
          movies && (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                label: 'Search for a movie...',
                InputLabelProps: getLabelProps({ className: classes.label }),
                InputProps: { onBlur, onChange, onFocus },
                inputProps
              })}

              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue, movies, {
                      showEmpty: true
                    }).map((movie, index) =>
                      renderSuggestion({
                        movie,
                        index,
                        itemProps: getItemProps({ item: movie.title }),
                        highlightedIndex,
                        selectedItem
                      })
                    )}
                  </Paper>
                ) : null}
              </div>
              {redirect.isActive && (
                <Redirect to={`/movie/${redirect.value}`} />
              )}
            </div>
          )
        )
      }}
    </Downshift>
  )
}

const mapStateToProps = ({ movies }) => {
  return {
    movies
  }
}

export default connect(mapStateToProps)(Search)
