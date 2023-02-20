import{createSlice} from '@reduxjs/toolkit'
const initialStatevalue=0;

export const userSlice1 =createSlice({
    
      name:'usercart',
    initialState:{value: 0},
   
    reducers:{
        add:(state,action)=>{
            state.value++;
        },
        remove:(state,action)=>{
            state.value--;
        },  
    

},
    
})

export const {add,remove}=userSlice1.actions;

export default userSlice1.reducer