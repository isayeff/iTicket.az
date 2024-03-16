import { createSlice } from "@reduxjs/toolkit";

const user1 = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user1 ?? false
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.user = action.payload
        },
        logout: (state) => {
            state.user = false
            localStorage.removeItem('user')
        }
    }
})

export const { login, logout } = auth.actions
export default auth.reducer