import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchJobs = createAsyncThunk('jobs/fetchJobs',async()=>{
    const result = await axios.get('http://localhost:3000/jobs')
    // console.log(result.data);
    localStorage.setItem("allJobs",JSON.stringify(result.data))
    return result.data
    
})

const jobSlice = createSlice({
    name:'jobs',
    initialState:{
        allJobs:[],
        dummyJobs:[]
    },
    reducers:{
        searchJob:(state,action)=>{
            state.allJobs=state.dummyJobs.filter(item=>item.jobTitle.toLowerCase().includes(action.payload))
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchJobs.fulfilled,(state,action)=>{
            state.allJobs=action.payload
            state.dummyJobs=action.payload
        }),
        builder.addCase(fetchJobs.pending,(state,action)=>{
            state.allJobs=[]
            state.dummyJobs=[]

        }),
        builder.addCase(fetchJobs.rejected,(state,action)=>{
            state.allJobs=[]
            state.dummyJobs=[]
        })
    }

})

export const {searchJob}=jobSlice.actions
export default jobSlice.reducer