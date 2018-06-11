import React from 'react'
import { shallow } from 'enzyme'
import LoadingView from '../'

describe('LoadingView', () => {
  it('should render correctly', () => {
    // When
    const tree = shallow(<LoadingView />)

    // Then
    expect(tree).toMatchSnapshot()
  })
})
