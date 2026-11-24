import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload
      const existingItem = state.cartItems.find((item) => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartItems.push({ ...product, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((product) => product.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((product) => product.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
    },
    clearCart: () => initialState,
  },
})

export const {
  addItem,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions

export const selectCartItems = (state) => state.cart.cartItems

export const selectCartItemCount = (state) =>
  state.cart.cartItems.reduce((count, item) => count + item.quantity, 0)

export const selectCartTotal = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

export default cartSlice.reducer
