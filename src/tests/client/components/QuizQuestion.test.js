import React from 'react'
import { Button, Radio } from '@material-ui/core'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import QuizQuestion from '../../../components/QuizQuestion'

Enzyme.configure({ adapter: new Adapter() })

describe('QuizQuestion component tests', () => {
  it('<QuizQuestion /> displays a 3 Radio Buttons', () => {
    const wrapper = mount(<QuizQuestion />)
    const actual = wrapper.find(Radio)
    expect(actual).toHaveLength(3)
  })
  it('<QuizQuestion /> with id=17 displays a Buttons', () => {
    const wrapper = mount(<QuizQuestion />)
    wrapper.setProps({ id: '17' })
    const actual = wrapper.find(Button)
    expect(actual).toHaveLength(1)
  })
})
