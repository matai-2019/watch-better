import React from 'react'
import { Button, ListItem } from '@material-ui/core'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Quiz from '../../../components/Quiz'
import QuizQuestion from '../../../components/QuizQuestion'

Enzyme.configure({ adapter: new Adapter() })

describe('Quiz component tests', () => {
  it('<Quiz /> displays a button on a initial render', () => {
    const wrapper = mount(<Quiz />)
    const actual = wrapper.find(Button)
    expect(actual).toHaveLength(1)
  })
  it('<Quiz> component changes this.state.isVisible to false on start button click', () => {
    const expected = false
    const wrapper = mount(<Quiz/>)
    const startButton = wrapper.find('button').at(0)

    startButton.simulate('click')

    expect(wrapper.state().isVisible).toEqual(expected)
  })
  it('<Quiz> component displays 17 <QuizQuestion> components when state.isVisible is set to false', () => {
    const expected = 17
    const wrapper = mount(<Quiz/>)
    wrapper.setState({ isVisible: false })

    const actual = wrapper.find(QuizQuestion)
    expect(actual).toHaveLength(expected)
  })
  it('<Quiz> component displays 5 <ListItem> components when state.displayAnswers is set to true', () => {
    const expected = 5
    const wrapper = mount(<Quiz/>)
    wrapper.setState({ displayAnswers: true })

    const actual = wrapper.find(ListItem)
    expect(actual).toHaveLength(expected)
  })
})
