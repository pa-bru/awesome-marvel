import React from 'react'
import { shallow } from 'enzyme'
import Head from '../'

describe('Head', () => {
  it('should render correctly', () => {
    // When
    const tree = shallow(<Head />)

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should render with a child', () => {
    // When
    const tree = shallow(
      <Head>
        <meta property="og:title" content="additional meta tag for the Head component" />
      </Head>
    )

    // Then
    expect(tree).toMatchSnapshot()
  })
})
