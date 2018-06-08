export const loadState = () => {
  try {
    const state = localStorage.getItem('state')
    if (!state) {
      return undefined
    }
    return JSON.parse(state)
  } catch (error) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    // report nothing
  }
}
