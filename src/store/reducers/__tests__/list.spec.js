import reducer, { main, history } from '../list'

describe('list reducer', () => {
  it('should return the initial state', () => {
    // Given the initial state...

    // When the reducer is called without any action
    const result = reducer(undefined, {})

    // Then I should get the initial state.
    expect(result).toEqual({
      history: {
        isFetching: false,
        error: undefined,
        ids: [],
      },
      main: {
        isFetching: false,
        error: undefined,
        ids: [],
        total: 0,
        limit: 0,
        count: 0,
        offset: 0,
        isLastPage: false,
        nextOffset: 0,
      },
    })
  })

  describe('mainList reducer', () => {
    it('should return the initial state', () => {
      // When the reducer is called without any action
      const result = main(undefined, {})

      // Then I should get the initial state.
      expect(result).toEqual({
        isFetching: false,
        error: undefined,
        ids: [],
        total: 0,
        limit: 0,
        count: 0,
        offset: 0,
        isLastPage: false,
        nextOffset: 0,
      })
    })
  })

  describe('historyList reducer', () => {
    it('should return the initial state', () => {
      // When the reducer is called without any action
      const result = history(undefined, {})

      // Then I should get the initial state.
      expect(result).toEqual({
        isFetching: false,
        error: undefined,
        ids: [],
      })
    })
  })
})
