import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const quantity = action.payload.Quantity || 1;
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id,
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity });
      }
      ((state.totalQuantity += 1),
        (state.totalPrice += product.price * quantity));
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      const matchProduct = state.cartItems.find(
        (product) => product.id === productId,
      );
      if (matchProduct) {
        state.totalQuantity -= matchProduct.quantity;
        state.totalPrice -= matchProduct.price * matchProduct.quantity;
        state.cartItems = state.cartItems.filter(
          (product) => product.id !== productId,
        );
      }
    },

    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const matchProduct = state.cartItems.find(
        (product) => product.id === productId,
      );
      if (matchProduct) {
        matchProduct.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const matchProduct = state.cartItems.find(
        (product) => product.id === productId,
      );
      if (matchProduct && matchProduct.quantity > 1) {
        matchProduct.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartReducer.actions;
export default CartReducer.reducer;
