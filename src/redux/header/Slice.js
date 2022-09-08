import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem('user');

export const HeaderSlice = createSlice({
    name : 'header',
    initialState : {
        value : user ? user.replace(/ /g, "").replace('Bearer','Bearer ').replaceAll("\"", "") : null
    },
    reducers:{
        SetHeader: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { SetHeader } = HeaderSlice.actions
export const getHeader = (state) => state.header.value
export default HeaderSlice.reducer
