import React from 'react'
import { Button } from '@material-ui/core'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import WatchlistItem from '../../../components/WatchlistItem'
import { theme } from '../../../style/muiStyles'

Enzyme.configure({ adapter: new Adapter() })

test('<WatchlistItem /> displays 2 Buttons', () => {
  const mockStore = configureStore([thunk])({
    watchlist: [{ id: 1, title: 'Bad Moms' }]
  })
  const mockMovie = { id: 1, title: 'Bad Moms' }
  const wrapper = mount(
    <Router>
      <Provider store={mockStore}>
        <ThemeProvider theme={theme}>
          <WatchlistItem movie={mockMovie}/>
        </ThemeProvider>
      </Provider>
    </Router>
  )
  const actual = wrapper.find(Button)
  expect(actual).toHaveLength(2)
})
