import { createSlice } from '@reduxjs/toolkit'


export const loremSlice = createSlice({
    name:"lorem",
    initialState: { loremCount: 0 },
    reducers:{
        addLorem: (state)=>{
            state.loremCount+=1;
        },
        removeLorem: (state)=>{
            state.loremCount-=1;
        },
        clearLorem: (state)=>{
            state.loremCount=0;
        }

    }
})
export const {addLorem,removeLorem} = loremSlice.actions
export default loremSlice.reducer