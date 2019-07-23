import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { Button } from '@material-ui/core'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { theme } from '../../../style/muiStyles'
import Quiz from '../../../components/Quiz'
import MovieTestItem from '../../../components/MovieTestDetails'
import QuizQuestion from '../../../components/QuizQuestion'

Enzyme.configure({ adapter: new Adapter() })

const testStore = { quizAnswer: { id: '1', answer: 'yes' } }
const mockStore = configureStore([thunk])(testStore)

describe('Quiz component tests', () => {
  it('<Quiz /> displays two buttons on a initial render', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <ThemeProvider theme={theme}>
          <Quiz/>
        </ThemeProvider>
      </Provider>)
    const actual = wrapper.find(Button)
    expect(actual).toHaveLength(2)
  })
  it('<Quiz> component displays 17 <QuizQuestion> components', () => {
    const expected = 17
    const wrapper = mount(
      <Provider store={mockStore}>
        <ThemeProvider theme={theme}>
          <Quiz/>
        </ThemeProvider>
      </Provider>)
    const actual = wrapper.find(QuizQuestion)
    expect(actual).toHaveLength(expected)
  })
  it('<Quiz> component displays <MovieTestDetails> component', () => {
    const expected = 1
    const wrapper = mount(
      <Provider store={mockStore}>
        <ThemeProvider theme={theme}>
          <Quiz/>
        </ThemeProvider>
      </Provider>)
    const actual = wrapper.find(MovieTestItem)
    expect(actual).toHaveLength(expected)
  })
})
