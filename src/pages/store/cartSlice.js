 const {createSlice} = require('@reduxjs/toolkit');

const initialState = [];


const cartSlices = createSlice({
   
    name: 'cart',
    initialState,

    reducers:{
       add(state,action) {
          state.push(action.payload);
       },

       remove(state,action) {
       return  state= state.filter((item)=>item.id !== action.payload)

       },
    }

})

export const {add, remove} = cartSlices.actions;

export default cartSlices.reducer;