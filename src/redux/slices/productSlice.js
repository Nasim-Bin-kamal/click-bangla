import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const response = await fetch('https://safe-beach-17728.herokuapp.com/products')
            .then(res => res.json())
        return response;

    }

)


export const getReviews = createAsyncThunk(
    'products/getReviews',
    async () => {
        const response = await fetch('http://safe-beach-17728.herokuapp.com/reviews')
            .then(res => res.json())
        return response;

    }

)

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://safe-beach-17728.herokuapp.com/products', data)
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);
export const addReview = createAsyncThunk(
    'products/addReview',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://safe-beach-17728.herokuapp.com/reviews', data)
            return response.data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (_id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`http://safe-beach-17728.herokuapp.com/products/${_id}`);
            // return response.data;
            console.log(response);
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data);
        }
    }
);


const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        updateProduct: '',
        deleteProduct: '',
        reviews: [],
        isLoading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed

        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.allProducts.push(action.payload);
            toast.success(`New Product Added To Shop`, {
                position: "bottom-left",
                autoClose: 2000,
            });
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.allProducts = state.allProducts.filter(
                (product) => product._id !== action.payload
            );
            toast.error(`Deleted product successfully`, {
                position: "bottom-left",
                autoClose: 2000,
            });
        })
        builder.addCase(addReview.fulfilled, (state, action) => {
            state.reviews.push(action.payload);
            toast.success(`Successfully Reviewed`, {
                position: "bottom-left",
                autoClose: 2000,
            });
        })
        builder.addCase(getReviews.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getReviews.fulfilled, (state, action) => {
            state.reviews = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getReviews.rejected, (state) => {
            state.isLoading = false;
        })



        // [getProducts.pending]: (state) => {
        //     state.isLoading = true;
        // },
        //     [getProducts.fulfilled]: (state, action) => {
        //         state.allProducts = action.payload;
        //         state.isLoading = false;
        //     },
        //         [getProducts.rejected]: (state) => {
        //             state.isLoading = false;
        //         }

    },

})

// export const { } = productSlice.actions

export default productSlice.reducer;