import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toolbar } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Navbar from '../../../components/NavBar'
import { theme } from '../../../style/muiStyles'

Enzyme.configure({ adapter: new Adapter() })

describe('NavBar component tests', () => {
  it('<NavBar /> contains an InputBase tag', () => {
    const wrapper = mount(
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </Router>
    )
    const actual = wrapper.find(Toolbar)
    expect(actual).toHaveLength(1)
  })
})
