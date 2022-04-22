import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


export const getOrders = createAsyncThunk(
    'orders/getOrders',
    async () => {
        const response = await fetch('http://localhost:5000/orders')
            .then(res => res.json())
        return response;

    }

)


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

export const deleteOrder = createAsyncThunk(
    "orders/deleteOrder",
    async (_id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`http://localhost:5000/orders/${_id}`);
            // return response.data;
            console.log(response);

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data);
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

        //get orders
        builder.addCase(getOrders.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getOrders.rejected, (state) => {
            state.isLoading = false;
        })

        //add order

        builder.addCase(addOrder.fulfilled, (state, action) => {
            state.orders.push(action.payload);
            toast.success(`Order Successful`, {
                position: "bottom-left",
                autoClose: 2000,
            });
        })

        //delete order

        builder.addCase(deleteOrder.fulfilled, (state, action) => {
            state.orders = state.orders.filter(
                (order) => order._id !== action.payload
            );
            toast.error(`Deleted Order successfully`, {
                position: "bottom-left",
                autoClose: 2000,
            });
        })
    }
})

export default orderSlice.reducer;