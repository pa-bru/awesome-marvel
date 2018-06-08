import axios from 'axios'
import { getApiParams } from 'helpers/request'
import { historyListTypes, mainListTypes } from '../types'

/*
 * GET MAIN LIST
 */
export const loadMainList = (nextPage = false) => (dispatch, getState) => {
  // returns if page is cached and user didn't request next page
  if (!nextPage && getState().list.main.ids.length) {
    return Promise.resolve()
  }

  return dispatch(fetchMainList(nextPage))
}

const fetchMainListRequest = () => ({
  type: mainListTypes.FETCH_HEROES_REQUEST,
})

const fetchMainListSuccess = data => ({
  type: mainListTypes.FETCH_HEROES_SUCCESS,
  data,
})

const fetchMainListFailure = error => ({
  type: mainListTypes.FETCH_HEROES_FAILURE,
  error,
})

const fetchMainList = (nextPage = false) => (dispatch, getState) => {
  dispatch(fetchMainListRequest())

  return axios
    .get(`${process.env.REACT_APP_BASE_API_URL}/characters`, {
      params: {
        ...getApiParams(),
        offset: nextPage ? getState().list.main.nextOffset : 0,
        limit: 20,
      },
    })
    .then(
      response => dispatch(fetchMainListSuccess(response.data.data)),
      error => dispatch(fetchMainListFailure(error))
    )
}

/*
  GET HISTORY LIST
*/
export const loadHistoryList = () => (dispatch, getState) => {
  // if history heroes are already in the state
  if (getState().list.history.ids.every(id => id in getState().heroes)) {
    return Promise.resolve()
  }

  return dispatch(fetchHistoryList())
}

const fetchHistoryListRequest = () => ({
  type: historyListTypes.FETCH_HISTORY_REQUEST,
})

const fetchHistoryListSuccess = () => ({
  type: historyListTypes.FETCH_HISTORY_SUCCESS,
})

const fetchHistoryListFailure = error => ({
  type: historyListTypes.FETCH_HISTORY_FAILURE,
  error,
})

const fetchHistoryList = () => (dispatch, getState) => {
  dispatch(fetchHistoryListRequest())

  const urls = getState().list.history.ids.map(
    id => `${process.env.REACT_APP_BASE_API_URL}/characters/${id}`
  )

  return Promise.all(
    urls.map(url =>
      axios.get(url, {
        params: {
          ...getApiParams(),
        },
      })
    )
  )
    .then(responses => {
      return responses.forEach(response =>
        // @note: dispatch a random action just to update heroes state with the data key
        dispatch({ type: 'random/UPDATE_HEROES', data: response.data.data })
      )
    })
    .then(() => dispatch(fetchHistoryListSuccess()))
    .catch(error => dispatch(fetchHistoryListFailure(error)))
}

/*
  UPDATE THE HISTORY LIST
*/
export const addToHistory = id => ({
  type: historyListTypes.ADD_TO_HISTORY,
  id,
})

export const removeFromHistory = id => ({
  type: historyListTypes.REMOVE_FROM_HISTORY,
  id,
})

export const clearHistory = () => ({
  type: historyListTypes.CLEAR_HISTORY,
})
