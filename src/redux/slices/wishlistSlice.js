import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
name:'wishlist',
initialState:[],//since this state have to hold more than one item
reducers:{
 //actions
 //functions to add items to wishlist array state
 addToWishlist:(state,action)=>{
   state.push(action.payload)

  },
  //function to remov items from wishlistArray state

  removeFromwishlist:(state,action)=>{
    //it returs new array with items satisfying the condition
   return state.filter(item=>item.id!==action.payload)
  }
}

})


export const {addToWishlist,removeFromwishlist} = wishlistSlice.actions

export default wishlistSlice.reducer
