import { LOGIN_CHANGE_EMAIL_TEXT, LOGIN_CHANGE_PASSWORD_TEXT } from './actions'

const defaultState = {
  email: '',
  password: ''
}

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_CHANGE_EMAIL_TEXT: return { ...state, email: action.email }
    case LOGIN_CHANGE_PASSWORD_TEXT: return { ...state, password: action.password }
    default: return state
  }
}