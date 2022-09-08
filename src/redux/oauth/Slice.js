import { createSlice } from '@reduxjs/toolkit'
import jwt_decode from 'jwt-decode'
import oauth from '../../services/login'

const user = localStorage.getItem('user')

export const oauthSlice = createSlice({
  name: 'oauth',
  initialState: {
    value: user ? jwt_decode(user.replace('Bearer','')) : null,
  },
  reducers: {
    SetUser: (state, action) => {
      state.value = jwt_decode(action.payload)
    },
  },
})

export const setUserAsync = (body) => (dispatch) => {
  setTimeout(() => {
    dispatch(SetUser(body))
  }, 500)
}

export const { SetUser } = oauthSlice.actions
export const getUser = (state) => state.oauth
export default oauthSlice.reducer