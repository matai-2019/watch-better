import { UPDATE_TEST_FILTER } from '../actions/filter'

const initialState = []

const selectedTests = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEST_FILTER:
      return action.tests

    default:
      return state
  }
}

export default selectedTests
