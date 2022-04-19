import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item._id === payload._id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;

                toast.info(`Increased ${payload.name} Quantity`, {
                    position: "bottom-left",
                    autoClose: 2000,
                });
            } else {
                const tempProduct = { ...payload, quantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success(`${payload.name} added to cart`, {
                    position: "bottom-left",
                    autoClose: 2000,
                });
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, { payload }) => {
            state.cartItems = state.cartItems.filter(
                (cartItem) => cartItem._id !== payload._id
            );
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error(`${payload.name} removed from cart`, {
                position: "bottom-left",
                autoClose: 2000,
            });
        },
        decreaseQuantity: (state, { payload }) => {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem._id === payload._id
            );
            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
                toast.info(`${payload.name} decreases quantity`, {
                    position: "bottom-left",
                    autoClose: 2000,
                });
            } else if (state.cartItems[itemIndex].quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (cartItem) => cartItem._id !== payload._id
                );
                toast.error(`${payload.name} removed from cart`, {
                    position: "bottom-left",
                    autoClose: 2000,
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart: (state, { payload }) => {
            state.cartItems = [];
            toast.error(`Cart Cleared`, {
                position: "bottom-left",
                autoClose: 2000,
            });
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotal: (state, { payload }) => {
            let { totalPrice, totalQuantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;

                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;

                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );

            state.cartTotalAmount = totalPrice;
            state.cartTotalQuantity = totalQuantity;
        },
    },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart, getTotal } =
    cartSlice.actions;
export default cartSlice.reducer;
