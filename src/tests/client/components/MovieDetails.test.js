import React from 'react'
import { Icon } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import MovieDetails from '../../../components/MovieDetails'
import { theme } from '../../../style/muiStyles'

Enzyme.configure({ adapter: new Adapter() })

describe('MovieDetails component tests', () => {
  it.skip('<MovieDetails /> contains 4 Icon tags', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <MovieDetails />
      </ThemeProvider>
    )
    const actual = wrapper.find(Icon)
    expect(actual).toHaveLength(4)
  })
})
