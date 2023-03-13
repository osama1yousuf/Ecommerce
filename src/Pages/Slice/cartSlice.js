import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cart",
    initialState:{
      cartItem:[],
    },
      reducers:{
        addItem(state,action){
           state.cartItem.push(action.payload)
        },
        addQuantiy(state,action){
          const val =  state.cartItem.find((item)=> item.id == action.payload)
          val.quantity++
        }
      
    }
    
})
export default cartSlice.reducer
export const {addItem , addQuantiy} = cartSlice.actions