import { createSlice } from '@reduxjs/toolkit'
import jwt_decode from 'jwt-decode'
import oauth from '../../services/login'

export const oauthSlice = createSlice({
  name: 'oauth',
  initialState: {
    value: "no ha ingresado nada",
  },
  reducers: {
    SetUser: (state, action) => {
      console.log(action)
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