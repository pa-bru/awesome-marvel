import React from 'react'
import { shallow } from 'enzyme'

import { HistoryList, mapStateToProps } from '../'

import HistoryListItem from '../../HistoryListItem'

const defaultProps = {
  loadHistoryList: jest.fn(),
  historyList: [],
  clearHistory: jest.fn(),
  removeFromHistory: jest.fn(),
  classes: {},
  history: {},
  isIncomplete: false,
}

describe('HistoryList', () => {
  it('should return the expected result of mapStateToProps', () => {
    // Given
    const store = {
      list: {
        history: {
          ids: [1, 2],
        },
      },
      heroes: {
        1: {
          id: 1,
        },
        2: {
          id: 2,
        },
      },
    }

    const expected = {
      isIncomplete: false,
      history: store.list.history,
      historyList: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    }

    // When
    const state = mapStateToProps(store)

    // Then
    expect(state).toEqual(expected)
  })

  it('should render the error view', () => {
    // Given
    const props = {
      ...defaultProps,
      history: {
        error: {
          code: 400,
          status: 'Bad request',
        },
      },
    }
    // When
    const tree = shallow(<HistoryList {...props} />)

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should render the loading view', () => {
    // Given
    const props = {
      ...defaultProps,
      history: {
        isFetching: true,
      },
    }
    // When
    const tree = shallow(<HistoryList {...props} />)

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should render a specific message when the list is empty', () => {
    // When
    const tree = shallow(<HistoryList {...defaultProps} />)

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should render the list', () => {
    // Given
    const props = {
      ...defaultProps,
      historyList: [{ id: 1 }, { id: 2 }],
    }
    // When
    const tree = shallow(<HistoryList {...props} />)

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should call removeFromHistory on item icon click', () => {
    // Given
    const props = {
      ...defaultProps,
      historyList: [{ id: 1, name: 'yolo' }],
    }
    const tree = shallow(<HistoryList {...props} />)
    const item = tree.find(HistoryListItem).first()

    // When
    item.simulate('click')

    // Then
    expect(props.removeFromHistory).toHaveBeenCalled()
  })
})
