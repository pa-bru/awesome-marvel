import React from 'react'
import { shallow } from 'enzyme'
import HeroesList from '../'

describe('HeroCard', () => {
  it('should render correctly', () => {
    // When
    const tree = shallow(<HeroesList />)

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should render a list of heroes', () => {
    // Given
    const heroes = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ]

    // When
    const tree = shallow(<HeroesList heroes={heroes} />)

    // Then
    expect(tree).toMatchSnapshot()
  })
})
