import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'

import MovieList from '../../../components/MovieList'

Enzyme.configure({ adapter: new Adapter() })

test('MovieList component test', () => {
  const mockStore = configureStore()({
    movies: [{ name: 'Harry Potter' }]
  })
  const wrapper = mount(
    <Provider store={mockStore}>
      <Router>
        <Route component={MovieList} />
      </Router>
    </Provider>
  )
  expect(wrapper.text()).toMatch('Harry Potter')
})
