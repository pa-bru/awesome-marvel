import md5 from 'md5'

import { getApiParams } from '../request'

describe('request', () => {
  process.env = {
    REACT_APP_API_PRIVATE: 'API_PRIVATE',
    REACT_APP_API_PUBLIC: 'API_PUBLIC',
  }

  describe('getApiParams', () => {
    it('should return the API params', () => {
      // Given
      const ts = parseInt(Date.now() / 1000, 10)
      const expected = {
        apikey: 'API_PUBLIC',
        hash: md5(ts + 'API_PRIVATE' + 'API_PUBLIC'),
        ts,
      }

      // When
      const params = getApiParams()

      // Then
      expect(params).toEqual(expected)
    })
  })
})
