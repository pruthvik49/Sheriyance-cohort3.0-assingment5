import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name:'counter',
    initialState: {
  value: 0
},
    reducers:{
        increse : (state)=>{
            state.value++;
            
        }
        
    } 
})


export const {increse } = countSlice.actions
export default countSlice.reducer