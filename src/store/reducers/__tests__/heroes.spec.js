import reducer from '../heroes'

describe('heroes reducer', () => {
  it('should return the initial state', () => {
    // Given the initial state...

    // When the reducer is called without any action
    const result = reducer(undefined, {})

    // Then I should get the initial state.
    expect(result).toEqual({})
  })

  it('should merge action.data.results and return the new state', () => {
    // Given the initial state...
    const state = {
      1: {
        id: 1,
      },
    }

    const expected = {
      1: {
        id: 1,
        name: 'Marc',
      },
      2: {
        id: 2,
        name: 'polo',
      },
    }

    // When
    const result = reducer(state, {
      data: {
        results: [{ id: 1, name: 'Marc' }, { id: 2, name: 'polo' }],
      },
    })

    // Then
    expect(result).toEqual(expected)
  })
})
