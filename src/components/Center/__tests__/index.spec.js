import React from 'react'
import { shallow } from 'enzyme'
import Center from '../'

describe('Center', () => {
  it('should render correctly', () => {
    // When
    const tree = shallow(<Center>COUCOU</Center>)

    // Then
    expect(tree).toMatchSnapshot()
  })
})
