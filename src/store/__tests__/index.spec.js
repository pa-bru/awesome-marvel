import configureStore from '../'
import * as redux from 'redux'
import reducers from '../reducers'

jest.mock('redux')

describe('configureStore', () => {
  it('should call createStore', () => {
    const spy = jest.spyOn(redux, 'createStore')

    configureStore()

    expect(spy).toHaveBeenCalled()
  })

  it('should use redux dev tools if in window and NODE_ENV is production', () => {
    process.env.NODE_ENV = 'production'
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = jest.fn()

    const spy = jest.spyOn(redux, 'createStore')

    configureStore()

    expect(spy).toHaveBeenCalledWith(
      reducers,
      undefined,
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )
    process.env.NODE_ENV = 'test'
  })

  it('should call createStore with a preloaded state', () => {
    const state = { heroes: { 1: { id: 1 } } }
    const spy = jest.spyOn(redux, 'createStore')

    configureStore(state)

    expect(spy).toHaveBeenCalledWith(reducers, state, redux.compose())
  })
})
