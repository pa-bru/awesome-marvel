import React from 'react'
import { shallow } from 'enzyme'
import ThemeProvider from '../'

describe('ThemeProvider', () => {
  it('should render correctly', () => {
    // When
    const tree = shallow(<ThemeProvider />)

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should render with a child', () => {
    // Given
    const Child = () => <div>Coucou</div>

    // When
    const tree = shallow(
      <ThemeProvider>
        <Child />
      </ThemeProvider>
    )

    // Then
    expect(tree).toMatchSnapshot()
  })
})
