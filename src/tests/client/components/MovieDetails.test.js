import React from 'react'
import { Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Enzyme, { mount } from 'enzyme'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'

import MovieDetails from '../../../components/MovieDetails'
import { theme } from '../../../style/muiStyles'
import testStore from './stores/MovieDetailsTestStore'

Enzyme.configure({ adapter: new Adapter() })

describe('MovieDetails component tests', () => {
  it('<MovieDetails /> contains 12 Typography tags', () => {
    const mockStore = configureStore([thunk])(testStore)
    const wrapper = mount(
      <Provider store={mockStore}>
        <ThemeProvider theme={theme}>
          <MovieDetails match={{ params: { id: 4 } }} />
        </ThemeProvider>
      </Provider>
    )
    const actual = wrapper.find(Typography)
    expect(actual).toHaveLength(12)
  })
})
