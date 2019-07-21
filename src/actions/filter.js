export const UPDATE_TEST_FILTER = 'UPDATE_TEST_FILTER'

export const setFilter = values => {
  return {
    type: UPDATE_TEST_FILTER,
    tests: values
  }
}
