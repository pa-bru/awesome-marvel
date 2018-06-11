import React from 'react'

import { mount } from 'enzyme'
import { ErrorBoundary } from '../'

const BadChild = () => {
  throw new Error('Error thrown from problem child')
}

describe('ErrorBoundary', () => {
  beforeEach(() => {
    // Mock console.error to avoid logging the error boundary.
    jest.spyOn(console, 'error')
    global.console.error.mockImplementation(() => {})
  })

  afterEach(() => {
    global.console.error.mockRestore()
  })

  it('should catch errors with componentDidCatch', () => {
    // Given
    const spy = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch')
    ErrorBoundary.prototype.componentDidCatch = jest.fn()

    // When
    mount(
      <ErrorBoundary>
        <BadChild />
      </ErrorBoundary>
    )

    // Then
    expect(ErrorBoundary.prototype.componentDidCatch).toHaveBeenCalled()
    spy.mockRestore()
  })

  it('should set the state.error to true', () => {
    // When
    const tree = mount(
      <ErrorBoundary classes={{}}>
        <BadChild />
      </ErrorBoundary>
    )

    // Then
    expect(tree.state('error')).toEqual(true)
  })

  it('should display a fallback error message when error occurs', () => {
    // When
    const tree = mount(
      <ErrorBoundary classes={{}}>
        <BadChild />
      </ErrorBoundary>
    )

    // Then
    expect(tree).toMatchSnapshot()
  })

  it('should display the children component when no error was thrown', () => {
    // Given
    const GoodChild = () => <div>COUCOU</div>

    // When
    const tree = mount(
      <ErrorBoundary classes={{}}>
        <GoodChild />
      </ErrorBoundary>
    )

    // Then
    expect(tree).toMatchSnapshot()
  })
})
