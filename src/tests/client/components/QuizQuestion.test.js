import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { Radio } from '@material-ui/core'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { theme } from '../../../style/muiStyles'
import QuizQuestion from '../../../components/QuizQuestion'

Enzyme.configure({ adapter: new Adapter() })

const testStore = { quizAnswer: { id: '1', answer: 'yes' } }
const mockStore = configureStore([thunk])(testStore)

describe('QuizQuestion component tests', () => {
  it('<QuizQuestion /> displays a 3 Radio Buttons', () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <ThemeProvider theme={theme}>
          <QuizQuestion/>
        </ThemeProvider>
      </Provider>)
    const actual = wrapper.find(Radio)
    expect(actual).toHaveLength(3)
  })
})
