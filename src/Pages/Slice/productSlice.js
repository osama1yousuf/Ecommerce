import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name:"product",
    initialState:{
        productList:[]
    },
    reducers:{
      totalProducts(state,action){
         state.productList = action.payload
      },
      addToCart(state,action){
         const filterVal = state.productList.find((item)=> item.id == action.payload.id)
         if (filterVal.rating.count >= 1) {
            filterVal.rating.count--
            filterVal.quantity+=1

         }
      },
      increaseQuantity(state,action){
       const val = state.productList.find((item)=> item.id == action.payload)
       if (val.rating.count > 0) {
         val.rating.count--
       }
       else{
         window.alert(`${val.title} is out of stock`)
      }
      },
      decreaseQunatity(state,action){
         const val = state.productList.find((item)=> item.id == action.payload)
         if (val.rating.count > 0) {
           val.rating.count++
         }
         
      }
      
    }
})

export default productSlice.reducer
export const{totalProducts,addToCart,increaseQuantity,decreaseQunatity} =productSlice.actions