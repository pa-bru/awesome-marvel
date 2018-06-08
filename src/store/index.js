import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'

export default preloadedState => {
  // enables redux-dev-tools-extension only in development
  // chome extension -> https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const middlewares = [thunkMiddleware]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  return createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(...middlewares)))
}
