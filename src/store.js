import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './components/users/userSlice'

const store = configureStore({
    reducer:{
        users: usersReducer
    }
}
)
export default store