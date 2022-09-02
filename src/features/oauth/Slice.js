import { createSlice } from '@reduxjs/toolkit'
import oauth from '../../services/login'

export const oauthSlice = createSlice({
  name: 'counter',
  initialState: {
    value: "no ha ingresado nada",
  },
  reducers: {
    SetUser: async(state, action) => {
      
      let user = ""
      const result = await oauth(action.payload)
      .then(response => user = response)
      .catch(e => user = e)

      state.value = user
      console.log(state.value)
    },
  },
})

export const setUserAsync = (body) => (dispatch) => {
  setTimeout(() => {
    dispatch(SetUser(body))
  }, 1)
}

export const { SetUser } = oauthSlice.actions
export const getUser = (state) => state.oauth.value
export default oauthSlice.reducer