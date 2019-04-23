const initialState = {
    userName: ''
}

export default function user(state = initialState, action) {
    switch (action.type) {
      case 'SET_USER_NAME':
        return {...state, userName: action.payload}
      case 'CLEAR_USER_NAME':
        return {...state, userName: ''}
      default:
        return state
    }
  }