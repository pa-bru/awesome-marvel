import axios from 'axios'

import { heroesTypes } from '../types'
import { getApiParams } from 'helpers/request'

/*
  GET A SINGLE HERO
*/
export const loadHero = id => (dispatch, getState) => {
  const hero = getState().heroes[id]
  if (hero) {
    return Promise.resolve()
  }

  return dispatch(fetchHero(id))
}

const fetchHeroRequest = () => ({
  type: heroesTypes.FETCH_HERO_REQUEST,
})

const fetchHeroSuccess = data => ({
  type: heroesTypes.FETCH_HERO_SUCCESS,
  data,
})

const fetchHeroFailure = error => ({
  type: heroesTypes.FETCH_HERO_FAILURE,
  error,
})

const fetchHero = id => (dispatch, getState) => {
  dispatch(fetchHeroRequest())

  return axios
    .get(`${process.env.REACT_APP_BASE_API_URL}/characters/${id}`, {
      params: {
        ...getApiParams(),
      },
    })
    .then(
      response => dispatch(fetchHeroSuccess(response.data.data)),
      error => dispatch(fetchHeroFailure(error))
    )
}
