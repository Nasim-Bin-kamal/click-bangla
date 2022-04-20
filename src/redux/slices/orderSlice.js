import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


export const addOrder = createAsyncThunk(
    'orders/addOrder',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/orders', data)
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);



const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        isLoading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addOrder.fulfilled, (state, action) => {
            state.reviews.push(action.payload);
            toast.success(`Order Successful`, {
                position: "bottom-left",
                autoClose: 2000,
            });
        })
    }
})

export default orderSlice.reducer;