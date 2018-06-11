import React from 'react'
import { shallow } from 'enzyme'

import { HistoryListItem } from '../'

// Given
const props = {
  id: 1,
  name: 'Thor',
  onClick: jest.fn(),
  history: {
    push: jest.fn(),
  },
}

describe('HistoryListItem', () => {
  it('should render a ListItem correctly', () => {
    // When
    const tree = shallow(<HistoryListItem {...props} />)

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should call history.push on click on the list item', () => {
    // Given
    const tree = shallow(<HistoryListItem {...props} />)

    // When
    tree.simulate('click')

    // Then
    expect(props.history.push).toHaveBeenCalledWith(`/characters/${props.id}`)
  })
})
