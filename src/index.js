import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import throttle from 'lodash/throttle'

import { loadState, saveState } from 'helpers/localStorage'
import configureStore from 'store'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

import './reset.css'

const preloadedState = loadState()
const store = configureStore(preloadedState)

// save in localStorage only the heroes ids of the user history
store.subscribe(
  throttle(
    () =>
      saveState({
        list: {
          history: store.getState().list.history,
        },
      }),
    1000
  )
)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
