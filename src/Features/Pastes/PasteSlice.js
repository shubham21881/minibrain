import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pastes: localStorage.getItem("pastes")? JSON.parse(localStorage.getItem("pastes")):[]
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addtopastes: (state,action) => {
      
     
    },
    updatepastes: (state,action) => {
     

    },
    removefrompastes: (state, action) => {
     

    },
    resetpastes:(state,action)=>{

    }
  },
})

// Action creators are generated for each case reducer function
export const {addtopastes ,updatepastes ,removefrompastes,resetpastes } = pasteSlice.actions

export default pasteSlice.reducer