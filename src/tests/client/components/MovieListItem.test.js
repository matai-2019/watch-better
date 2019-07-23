import React from 'react'
import { Button } from '@material-ui/core'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import MovieListItem from '../../../components/MovieListItem'
import { theme } from '../../../style/muiStyles'

Enzyme.configure({ adapter: new Adapter() })

test('<MovielistItem /> always displays 1 Button', () => {
  const mockStore = configureStore([thunk])({
    watchlist: [{ id: 1, title: 'Bad Moms' }],
    seenList: [{ id: 1, title: 'Bad Moms' }, { id: 2, title: 'Hidden Figures' }]
  })
  const mockMovie = {
    id: 1,
    title: 'Bad Moms',
    recommended: 1,
    apiMovieId: 376659,
    movieTests: [
      {
        testType: 'Bechdel Test',
        result: 1
      },
      {
        testType: 'Rees Davies Test',
        result: 0
      },
      {
        testType: 'Ko Test',
        result: 1
      },
      {
        testType: 'Landau Test',
        result: 1
      },
      {
        testType: 'Feldman Test',
        result: 0
      }
    ],
    image: '/9PaIkUnfOcU1wi5cFbamnmAkjEs.jpg',
    rating: 6.5
  }

  const wrapper = mount(
    <Router>
      <Provider store={mockStore}>
        <ThemeProvider theme={theme}>
          <MovieListItem movie={mockMovie}/>
        </ThemeProvider>
      </Provider>
    </Router>
  )
  const actual = wrapper.find(Button)
  expect(actual).toHaveLength(1)
})
