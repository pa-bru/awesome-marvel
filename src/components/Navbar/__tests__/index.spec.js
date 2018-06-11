import React from 'react'
import { shallow } from 'enzyme'
import { Navbar } from '../'

import IconButton from '@material-ui/core/IconButton'

describe('Navbar', () => {
  it('should render correctly', () => {
    // When
    const tree = shallow(<Navbar classes={{}} />)

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should render with a child', () => {
    // Given
    const Child = () => <div>COUCOU</div>

    // When
    const tree = shallow(
      <Navbar classes={{}}>
        <Child />
      </Navbar>
    )

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should toggle the menu', () => {
    // Given
    const tree = shallow(<Navbar classes={{}} />)
    const initial = tree.state('isMenuOpen')
    const button = tree.find(IconButton).first()

    // When
    button.simulate('click')

    // Then
    expect(tree.state('isMenuOpen')).toEqual(!initial)
  })
})
