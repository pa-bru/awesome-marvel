import React from 'react'
import { shallow } from 'enzyme'
import ErrorView from '../'

describe('ErrorView', () => {
  it('should render correctly with a default message', () => {
    // When
    const tree = shallow(<ErrorView />)

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should render with a child', () => {
    // When
    const tree = shallow(<ErrorView>Coucou</ErrorView>)

    // Then
    expect(tree).toMatchSnapshot()
  })
})
