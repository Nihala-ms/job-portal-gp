import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = "http://localhost:3000/users"

export const fetchUser = createAsyncThunk('jobs/fetchuser',async()=>{
    const result = await axios.get('http://localhost:3000/users')
    // console.log(result.data);
    // localStorage.setItem("allJobs",JSON.stringify(result.data))
    return result.data
    
})









// const savedUser = JSON.parse(localStorage.getItem("user"))
const editSlice = createSlice({
  name: "userData",

  initialState: {
    currentUserData:{},
    loading: false,
    error: null
  },

  reducers: {
    
  },

  extraReducers: (builder) => {

    builder

      .addCase(fetchUser.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(fetchUser.fulfilled, (state) => {
        state.loading = false
        state.currentUserData=action.payload
       
      })

      

      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })


      

  }
})




export default editSlice.reducer