import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
 

  reducers: {
 //actions
  //funtion to add items to cart array
  addToCart:(state,action)=>{
              state.push(action.payload)
              
  },
  //fuction to remove items from cart
  removeFromCart : (state,action)=>{
  return state.filter(item=>item.id!=action.payload)
  } ,
  //function to empty cart
  emptyCart:(state)=>{
    return state = []
  }
}
});

export default cartSlice.reducer;
export const{addToCart,removeFromCart,emptyCart}= cartSlice.actions
