import {configureStore} from "@reduxjs/toolkit"
import jobSlice from "./slice/jobSlice"
import userSlice from "./slice/userSlice"
import appliedSlice from "./slice/appliedSlice"
import editSlice from './slice/editSlice'

const jobStore = configureStore({
    reducer:{
        jobReducer:jobSlice,
        userReducer:userSlice,
        appliedReducer:appliedSlice,
        editReducer:editSlice

    }
})

export default jobStore
