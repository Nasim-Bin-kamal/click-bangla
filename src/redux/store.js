import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import { getTotal } from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
    },
})

store.dispatch(getTotal())