import React from 'react'
import { shallow } from 'enzyme'
import { HeroCard } from '../'

// Given
const props = {
  urls: [
    {
      type: 'wiki',
      url: 'http://url.com',
    },
    {
      type: 'comiclink',
      url: 'http://url.com',
    },
  ],
  classes: {},
}

describe('HeroCard', () => {
  it('should render correctly', () => {
    // When
    const tree = shallow(<HeroCard {...props} />)

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should render the extended version', () => {
    // When
    const tree = shallow(<HeroCard {...props} extended />)

    // Then
    expect(tree).toMatchSnapshot()
  })
})
