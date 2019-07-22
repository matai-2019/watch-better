import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toolbar } from '@material-ui/core'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Navbar from '../../../components/NavBar'
import { theme } from '../../../style/muiStyles'

Enzyme.configure({ adapter: new Adapter() })

describe('NavBar component tests', () => {
  it('<NavBar /> contains an Toolbar tag', () => {
    const mockStore = configureStore([thunk])({
      movies: [{ id: 1, title: 'Bad Moms' }],
      watchlist: [{ id: 1, title: 'Bad Moms' }, { id: 2, title: 'Hidden Figures' }]
    })
    const wrapper = mount(
      <Router>
        <Provider store={mockStore}>
          <ThemeProvider theme={theme}>
            <Navbar />
          </ThemeProvider>
        </Provider>
      </Router>
    )
    const actual = wrapper.find(Toolbar)
    expect(actual).toHaveLength(1)
  })
})
