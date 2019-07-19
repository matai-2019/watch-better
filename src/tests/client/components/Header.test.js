import React from 'react'
import { Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header from '../../../components/Header'
import { theme } from '../../../style/muiStyles'

Enzyme.configure({ adapter: new Adapter() })

describe('Header component tests', () => {
  it('<Header /> contains a Title and subtitle', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )
    const actual = wrapper.find(Typography)
    expect(actual).toHaveLength(2)
  })
})
