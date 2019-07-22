import React from 'react'
import PropTypes from 'prop-types'

import { isAuthenticated } from 'authenticare/client'

export function IfAuthenticated ({ children }) {
  return isAuthenticated()
    ? <React.Fragment>{ children }</React.Fragment>
    : null
}

export function IfNotAuthenticated ({ children }) {
  return !isAuthenticated()
    ? <React.Fragment>{ children }</React.Fragment>
    : null
}

IfAuthenticated.propTypes = {
  children: PropTypes.node
}

IfNotAuthenticated.propTypes = {
  children: PropTypes.node
}
