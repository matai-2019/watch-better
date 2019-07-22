import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'
import thunk from 'redux-thunk'

import Watchlist from '../../../components/Watchlist'
import { theme } from '../../../style/muiStyles'

Enzyme.configure({ adapter: new Adapter() })

test('Watchlist component test', () => {
  const mockStore = configureStore([thunk])({
    watchlist: [
      {
        id: 1,
        title: 'Bad Moms',
        recommended: 1,
        apiMovieId: 376659,
        movieTests: [
          { testType: 'Bechdel Test', result: 1 },
          { testType: 'Rees Davies Test', result: 0 },
          { testType: 'Ko Test', result: 1 },
          { testType: 'Landau Test', result: 1 },
          { testType: 'Feldman Test', result: 0 }],
        image: '/9PaIkUnfOcU1wi5cFbamnmAkjEs.jpg',
        rating: 6.5
      }
    ]
  })
  const wrapper = mount(
    <Provider store={mockStore}>
      <ThemeProvider theme={theme}>
        <Router>
          <Route component={Watchlist} />
        </Router>
      </ThemeProvider>
    </Provider>
  )
  expect(wrapper.text()).toMatch('Bad Moms')
})
