import { combineReducers } from 'redux'

import { mainListTypes, historyListTypes, heroesTypes } from '../types'

const getIds = list => list.map(element => element.id)

const initialState = {
  isFetching: false,
  error: undefined,
  ids: [],
  total: 0,
  limit: 0,
  count: 0,
  offset: 0,
  isLastPage: false,
  nextOffset: 0,
}

export const main = (state = initialState, action) => {
  switch (action.type) {
    case mainListTypes.FETCH_HEROES_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case mainListTypes.FETCH_HEROES_SUCCESS:
      return {
        ...state,
        error: undefined,
        isFetching: false,
        ids: [...state.ids, ...getIds(action.data.results)],
        total: action.data.total,
        limit: action.data.limit,
        count: action.data.count,
        offset: action.data.offset,
        isLastPage: action.data.total <= action.data.offset + action.data.count,
        nextOffset: action.data.offset + action.data.count,
      }

    case mainListTypes.FETCH_HEROES_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }

    case heroesTypes.FETCH_HERO_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case heroesTypes.FETCH_HERO_SUCCESS:
      return {
        ...state,
        error: undefined,
        isFetching: false,
      }
    case heroesTypes.FETCH_HERO_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state
  }
}

const handleAddToHistory = (state, action) => {
  // shallow copy
  let newState = [...state]

  // remove potential duplicate id
  if (newState.includes(action.id)) {
    newState = newState.filter(id => id !== action.id)
  }

  // add id to the list
  newState = [action.id, ...newState]

  // history has a max length of 10
  if (newState.length > 10) {
    // remove last element of the history
    const lastIndex = newState.length - 1
    newState = newState.slice(0, lastIndex)
  }

  return newState
}

export const history = (
  state = {
    isFetching: false,
    error: undefined,
    ids: [],
  },
  action
) => {
  switch (action.type) {
    case historyListTypes.FETCH_HISTORY_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case historyListTypes.FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        error: undefined,
        isFetching: false,
      }

    case historyListTypes.FETCH_HISTORY_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }

    case historyListTypes.ADD_TO_HISTORY:
      return {
        ...state,
        ids: handleAddToHistory(state.ids, action),
      }

    case historyListTypes.REMOVE_FROM_HISTORY:
      return {
        ...state,
        ids: state.ids.filter(id => Number(id) !== Number(action.id)),
      }

    case historyListTypes.CLEAR_HISTORY:
      return {
        ...state,
        ids: [],
      }

    default:
      return state
  }
}

export default combineReducers({
  history,
  main,
})
