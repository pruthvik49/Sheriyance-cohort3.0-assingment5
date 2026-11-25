import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    
    name:"Auth",
        initialState: () => {
        try {
            const savedUser = JSON.parse(localStorage.getItem("Luser"))
            return {
                value: savedUser,
                AuthUser: Boolean(savedUser)
            }
        } catch {
            return {
                value: null,
                AuthUser: false
            }
        }
    },
    reducers:{
        handleLogin:(state,action)=>{
            
                state.value = action.payload
                state.AuthUser = true
        },
        handleLogout:(state)=>{
            state.AuthUser = false;
            state.value=null
        }

    }
})

export const {handleLogin, handleLogout } = authSlice.actions

export default authSlice.reducer