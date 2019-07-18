import React from 'react'
import { Modal } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import MovieTestDetails from '../../../components/MovieTestDetails'
import { theme } from '../../../style/muiStyles'

Enzyme.configure({ adapter: new Adapter() })

describe('MovieTestDetails component tests', () => {
  it('<MovieTestDetails /> contains 4 Modal tags', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <MovieTestDetails />
      </ThemeProvider>
    )
    const actual = wrapper.find(Modal)
    expect(actual).toHaveLength(4)
  })
})
