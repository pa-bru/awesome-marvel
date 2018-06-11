import { loadState, saveState } from '../localStorage'

describe('localStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('loadState', () => {
    it('should return a parsed state from localStorage', () => {
      // Given
      const expected = { heroes: {} }
      localStorage.setItem('state', JSON.stringify(expected))

      // When
      const state = loadState()

      // Then
      expect(state).toEqual(expected)
    })

    it('should return undefined if no item was found', () => {
      // Given a null item
      localStorage.setItem('state', null)

      // When localStorage state is empty
      const state = loadState()

      // Then
      expect(state).toEqual(undefined)
    })

    it('should return undefined if the operation throwed an error', () => {
      // Given a bad stringified item
      localStorage.setItem('state', '{},')

      // When localStorage state is empty
      const state = loadState()

      // Then
      expect(state).toEqual(undefined)
    })
  })

  describe('saveState', () => {
    it('should call localStorage.setItem', () => {
      // Given
      const state = { heroes: {} }
      const spy = jest.spyOn(localStorage, 'setItem')

      // When
      saveState(state)

      // Then
      expect(spy).toHaveBeenCalled()
    })
  })
})
