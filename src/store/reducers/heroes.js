const listToObj = list => {
  return list.reduce((acc, current) => {
    acc[current.id] = current
    return acc
  }, {})
}

const heroes = (state = {}, action) => {
  // Always update heroes when we get data
  if (action.data && action.data.results) {
    return {
      ...state,
      ...listToObj(action.data.results),
    }
  }

  return state
}

export default heroes
