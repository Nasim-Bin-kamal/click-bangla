import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import orderReducer from './slices/orderSlice';
import { getTotal } from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        orders: orderReducer
    },
})

store.dispatch(getTotal())