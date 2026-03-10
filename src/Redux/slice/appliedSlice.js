import { createSlice } from "@reduxjs/toolkit";

const appliedSlice = createSlice({
    name:"applied",
    initialState:{
       appliedJobs :[]
    },
    reducers:{
        addToAppliedJobs:(state,action)=>{
            state.appliedJobs.push(action.payload)
        }

    }

})
export const {addToAppliedJobs}=appliedSlice.actions
export default appliedSlice.reducer