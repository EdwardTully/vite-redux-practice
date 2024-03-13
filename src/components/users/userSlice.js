import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    loading: false,
    users: [],
    error: ''
}

export const getUsers = createAsyncThunk('users/getUsers',()=>{
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.data)
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getUsers.pending, (state)=>{
            state.loading=true
        })
        builder.addCase(getUsers.fulfilled, (state, action)=>{
            state.loading = false
            state.users = action.payload
            state.error = ''

        })
        builder.addCase(getUsers.rejected, (state, action)=>{
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default usersSlice.reducer