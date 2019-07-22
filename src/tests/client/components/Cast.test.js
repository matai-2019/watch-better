import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { ThemeProvider } from '@material-ui/styles'
import Adapter from 'enzyme-adapter-react-16'

import Cast from '../../../components/Cast'
import CastMember from '../../../components/CastMember'
import { theme } from '../../../style/muiStyles'

Enzyme.configure({ adapter: new Adapter() })

describe('Cast component tests', () => {
  it('<Cast /> contains a 6 CastMembers', () => {
    const cast = [
      { name: 'Anisha Dhana', image: '/notFound.jpg' },
      { name: 'David Brown', image: '/notFound.jpg' },
      { name: 'Raaya Pathare', image: '/notFound.jpg' },
      { name: 'Joanna Klimas', image: '/notFound.jpg' },
      { name: 'Jennie Watson', image: '/notFound.jpg' },
      { name: 'Jared Tasker', image: '/notFound.jpg' }
    ]
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Cast cast={cast}/>
      </ThemeProvider>
    )
    const actual = wrapper.find(CastMember)
    expect(actual).toHaveLength(6)
  })
})
