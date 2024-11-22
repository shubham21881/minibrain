import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-hot-toast"



const initialState = {
  pastes: localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addtopastes: (state,action) => {
         const  paste=action.payload
           state.pastes.push(paste)
           const index=state.pastes.findIndex((items)=> items._id===paste._id)
          //  if(index>=0){
          //   toast.error("paste already exist")
          //   return
          //  }
      
         localStorage.setItem("pastes",JSON.stringify( state.pastes))
         toast.success("paste added")
         

 
    },
    updatepastes: (state,action) => {
      const paste = action.payload
        const index= state.pastes.findIndex((items)=> items._id===paste._id)
        if(index >=0){
          state.pastes[index]=paste
          localStorage.setItem("pastes",JSON.stringify(state.pastes))
          toast.success("paste updated")
        }
     

    },
    removefrompastes: (state, action) => {
      const pasteId=action.payload;
      // console.log(pasteId);
      const index= state.pastes.findIndex((items)=>items._id===pasteId)

      if(index>=0){
        // If the course is found in the Pastes, remove it
        state.pastes.splice(index, 1)
        localStorage.setItem("pastes",JSON.stringify(state.pastes))
        toast.success("paste deleted")
      }
      

    },
    resetpastes:(state)=>{
     state.pastes=[]
     localStorage.removeItem("pastes")

    }
  },
})

// Action creators are generated for each case reducer function
export const {addtopastes ,updatepastes ,removefrompastes,resetpastes } = pasteSlice.actions

export default pasteSlice.reducer