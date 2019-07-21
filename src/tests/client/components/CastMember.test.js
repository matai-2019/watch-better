import React from 'react'
import { CardMedia } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CastMember from '../../../components/CastMember'

import { theme } from '../../../style/muiStyles'

Enzyme.configure({ adapter: new Adapter() })

describe('CastMember component tests', () => {
  it('<CastMember /> contains a CardMedia component', () => {
    const castMember = {
      name: 'Jared Tasker',
      image: '/notFound.jpg'
    }
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CastMember castMember={castMember}/>
      </ThemeProvider>
    )
    const actual = wrapper.find(CardMedia)
    expect(actual).toHaveLength(1)
  })
})
