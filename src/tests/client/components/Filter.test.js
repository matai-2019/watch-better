import React from 'react'
import { FormControl } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Enzyme, { mount } from 'enzyme'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'

import Filter from '../../../components/Filter'
import { theme } from '../../../style/muiStyles'

Enzyme.configure({ adapter: new Adapter() })

describe('Filter component tests', () => {
  it('<Filter /> contains a FormControl tag', () => {
    const mockStore = configureStore([thunk])({ selectedTests: [] })
    const wrapper = mount(
      <Provider store={mockStore}>
        <ThemeProvider theme={theme}>
          <Filter />
        </ThemeProvider>
      </Provider>
    )
    const actual = wrapper.find(FormControl)
    expect(actual).toHaveLength(1)
  })
})
