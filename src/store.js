import {configureStore} from '@reduxjs/toolkit'
import productSlice from './Pages/Slice/productSlice'
import cartSlice from './Pages/Slice/cartSlice'

const store = configureStore({
    reducer:{
        product:productSlice,
        cart:cartSlice
    }
})

export default store