const reducer = (state, action) => {
  if (action.type === 'SET_USER') {
    return { ...state, user: action.user }
  }
  if (action.type === 'SET_CATEGORY') {
    return { ...state, categories: action.payload }
  }
}

export default reducer
